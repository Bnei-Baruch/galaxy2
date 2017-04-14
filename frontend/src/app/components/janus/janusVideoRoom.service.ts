/**
 * Library to handle communication with Janus.
 */

import { AuthService, IUser  } from '../auth/auth.service';
import { JanusService } from './janus.service';
import { PublisherStatusTrackerService } from './publisherStatusTracker.service';
import { PubSubService } from '../pubSub/pubSub.service';

declare var escape: any;

interface IChannel {
  name: string;
  users: string[];
  joinedCallback: (login: string) => void;
  leftCallback: (login: string) => void;
}

interface IRemoteHandle {
  count: number;
  handle: any;  // Janus handle instance
  stream?: MediaStream;
}

interface IFeedForwardInfo {
  login: string;
  publisherId: string;
  videoStreamId: string;
  audioStreamId: string;
  otherAudioStreamExist: boolean;
}

interface IPortsForwardInfo {
  (port: number): IFeedForwardInfo;
}


/* @ngInject */
export class JanusVideoRoomService {
  localHandleAttached: ng.IPromise<any>;
  localStreamReady: ng.IPromise<any>;
  forwardingCompleted: ng.IPromise<any> = null;

  // Angular promises don't allow to check promise state
  // out of the box, thus using this flag
  isForwardingInProgress: boolean = false;

  remoteHandles: { (login: string): IRemoteHandle } = <any>{};
  localHandle: any;
  channels: { (key: string): IChannel } = <any>{};

  // Reverse map of logins to channels names
  userChannels: { (login: string): string[] } = <any>{};

  // Mapping between login and inner Janus data
  publishers: { (login: string): any } = <any>{};

  localUserLogin: string;
  localStream: MediaStream;

  constructor($window: ng.IWindowService,
      private $q: ng.IQService,
      private $log: ng.ILogService,
      private $timeout: ng.ITimeoutService,
      private $http: ng.IHttpService,
      private authService: AuthService,
      private janus: JanusService,
      private publisherStatusTracker: PublisherStatusTrackerService,
      private pubSub: PubSubService,
      private toastr: any,
      private config: any) {

    this.localHandleAttached = this.attachLocalHandle();

    // Create already resolved state by default
    this.forwardingCompleted = $q.when([]);

    // Override Janus' onbeforeunload handler
    janus.initialized.then(() => {
      var oldHandler = $window.onbeforeunload;

      $window.onbeforeunload = (e: any) => {
        if (this.isForwardingInProgress) {
          var message = 'SDI forwarding is in progress, closing Galaxy now can cause problems. Are you sure want to do it?';
          (e || $window.event).returnValue = message;
          return message;
        } else {
          oldHandler(e);
          return undefined;
        }
      };

    });
  }

  /**
   * Connect local media stream to Janus (sending video/audio?)
   *
   * @param login   User login
   * @param streamReadyCallback A callback function to be called after the local stream is created.
   */
  registerLocalUser(login: string, streamReadyCallback: (stream: MediaStream) => void) {
    this.localUserLogin = login;

    this.localHandleAttached.then(() => {
      this.localStreamReady.then((stream: MediaStream) => {
        streamReadyCallback(stream);
      });
    });
  }

  /**
   * Register channel with specific users so that each joined or leaving user
   * will notify the client (channel).
   *
   * @param channel.name              Channel name.
   * @param channel.users             User logins list.
   * @param channel.joinedCallback    Callback called when new user joined.
   * @param channel.leftCallback      Callback called when user left.
   *
   */
  registerChannel(channel: IChannel) {
    this.channels[channel.name] = channel;
    this.updateChannelUsers(channel.name, channel.users);

    // TODO: User publishers list and call userJoined method
    // for relevant channels
  }

  updateChannelUsers(name: string, users: string[]) {
    users.forEach((login: string) => {
      // Store users lookup table by login
      if (!(login in this.userChannels)) {
        this.userChannels[login] = [];
      }

      // Add channel to user channels list
      var channels = this.userChannels[login];
      if (channels.indexOf(name) === -1) {
        channels.push(name);
      }
    });
  }

  userLeftChannel(name: string, login: string) {
    if (login in this.userChannels) {
      var channels = this.userChannels[login];
      var idx = channels.indexOf(name);
      if (idx !== -1) {
        channels.splice(idx, 1);
      }
    }
  }

  /**
   * Subscribe for a remote user stream.
   *
   * @param login User login.
   * @returns     ng.IPromise
   *
   */
  subscribeForStream(login: string): ng.IPromise<MediaStream> {
    // TODO: implement timeout
    var deferred = this.$q.defer();

    var handleInst = null;

    if (login in this.remoteHandles) {
      this.$log.info('VideoRoom - remote handle already attached', login);
      var loginHandle = this.remoteHandles[login];
      loginHandle.count++;
      deferred.resolve(loginHandle.stream);
      return deferred.promise;
    }

    this.$log.info('VideoRoom - attach handle', login);
    this.janus.session.attach({
      plugin: 'janus.plugin.videoroom',
      success: (pluginHandle: any) => {
        handleInst = pluginHandle;
        var handleContainer: IRemoteHandle = {
          count: 1,
          handle: handleInst
        };
        this.remoteHandles[login] = handleContainer;

        this.$log.info('VideoRoom - remote handle attached, joining room as listener', login);
        if (login in this.publishers) {
          // TODO: This publisher id is of old video stream, it should be overridden when
          // same group enters again.
          handleInst.send({
            'message': {
              'request': 'join',
              'room': this.config.janus.videoRoom.roomId,
              'ptype': 'listener',
              'feed': this.publishers[login].id
            },
            error: (response: any) => this.$log.error('Error joining remote handle as listener', response)
          });
        } else {
          this.$log.error('VideoRoom - login already in publishers', login);
        }
      },
      error: (response: any) => {
        this.$log.error('Error attaching videoroom handle', response);
        deferred.reject(response);
      },
      onmessage: (msg: any, jsep: any) => {
        this.onRemoteHandleMessage(handleInst, msg, jsep);
      },
      onlocalstream: () => {
        // The subscriber stream is recvonly, we don't expect anything here
        this.$log.error('VideoRoom - remote handle got a local stream!');
      },
      onremotestream: (stream: MediaStream) => {
        this.$log.info('VideoRoom - got remote stream', login, stream);
				this.$log.debug(`Remote feed:`, handleInst);

        if (login in this.remoteHandles) {
          this.remoteHandles[login].stream = stream;
          this.$timeout(() => {
            deferred.resolve(stream);
          });
        } else {
          this.$log.error('VideoRoom - got remote stream for detached handle', login);
          deferred.reject();
        }
      },
      oncleanup: () => {
        this.$log.info('VideoRoom - remote handle oncleanup');
      }
    });

    return deferred.promise;
  }

  /**
   * Unsubscribe from a previously subscribed remote user stream.
   *
   * @param login User login.
   *
   */
  unsubscribeFromStream(login: string) {
    if (login in this.remoteHandles) {
      var handleItem = this.remoteHandles[login];
      handleItem.count--;

      if (!handleItem.count) {
        this.$log.info('VideoRoom - last remote handle, detaching.', login);
        handleItem.handle.detach({
          error: (response: any) => this.$log.error('Error detaching videoroom remote handle', response)
        });
        delete this.remoteHandles[login];
      }
    }
  }

  /**
   * Forward streams to janus ports
   *
   * @returns List of promises for every video port provided
   */
  forwardRemoteFeeds(users: IUser[], forwardIp: string, audioForwardIp: string,
                     videoPorts: number[], audioPorts?: number[], changeTitle?: boolean): ng.IPromise<any> {
    var deferred = this.$q.defer();

    var previousCompleted = this.forwardingCompleted;

    this.forwardingCompleted = deferred.promise;
    this.isForwardingInProgress = true;

    previousCompleted.finally(() => {
      this.getForwarders().then((portsForwardInfo: IPortsForwardInfo) => {

        var forwardPromises = users.map((user: IUser, index: number) => {
          var audioPort = (audioPorts || [])[index];
          return this.stopAndStartSdiForwarding(portsForwardInfo, user, forwardIp, audioForwardIp,
                                                videoPorts[index], audioPort, changeTitle);
        });

        (<any> this.$q).allSettled(forwardPromises).then(() => {
          this.$log.info('VideoRoom - all remote feeds forwarding finished');
          this.isForwardingInProgress = false;
          deferred.resolve();
        });

      }, (errorResponse: any) => {
        this.isForwardingInProgress = false;
        deferred.reject(`Error getting forwarded users: ${errorResponse}`);
      });

    });

    return deferred.promise;
  }

  /**
   * Change user title on a Janus port (SDI)
   *
   */
  changeRemoteFeedTitle(title: string, port: number) {
    this.$log.info('VideoRoom - change title', title, port);

    var titleApiUrl = this.config.janus.titleApiUrl
      .replace('%title%', escape(title))
      .replace('%port%', port);

    this.$http.get(titleApiUrl).error((data: any, st: any) => {
      this.$log.error('Error changing title', data, st);
    });
  }

  // Don't ever toggle audio as false, we want to control audio only from SDI.
  // toggleLocalAudio(enabled: boolean) {
  //   console.log('Audio toggle count', enabled);
  //   var audioTracks = this.localStream.getAudioTracks();
  //   audioTracks.forEach((audioTrack: MediaStreamTrack) => {
  //     this.$log.info('VideoRoom - toggle audio track', audioTrack.label, audioTrack.enabled, enabled);
  //     audioTrack.enabled = enabled;
  //   });
  // }

  stopSdiForwarding(forwardInfo: IFeedForwardInfo): ng.IPromise<any> {
    var deferred = this.$q.defer();

    if (forwardInfo) {
      this.$log.info('VideoRoom - stop SDI forwarding', forwardInfo.publisherId);
      this.$log.debug('VideoRoom - stop forwarding video', forwardInfo.videoStreamId);
      this.$log.debug('VideoRoom - stop forwarding audio', forwardInfo.audioStreamId);

      // Stop video and then audio forwarding
      this.stopStreamForwarding(forwardInfo, forwardInfo.videoStreamId).then(() => {
        if (forwardInfo.audioStreamId) {
          this.stopStreamForwarding(forwardInfo, forwardInfo.audioStreamId).then(() => {
            if (forwardInfo.otherAudioStreamExist !== undefined &&
                !forwardInfo.otherAudioStreamExist) {
              // Stop local audio for that user.
              this.pubSub.client.publish('/users/' + forwardInfo.login, {
                message: 'toggleAudio',
                enabled: false
              }).then(() => {
                this.$log.debug('Turning audio off:', forwardInfo.login);
                deferred.resolve();
              }, (error: any) => {
                this.$log.error('Error sending toggle audio command for', forwardInfo.login, error);
                this.toastr.error('Unable to toggle audio, error response recorded');
                deferred.reject();
              });
            } else {
              this.$log.debug('Not disabling audio as open in other place.');
              deferred.resolve();
            }
          }, () => {
            this.$log.error('VideoRoom - error stopping audio stream.');
            deferred.reject();
          });
        } else {
          deferred.resolve();
        }
      }, () => {
        var error = 'VideoRoom - error stopping video stream.';
        this.$log.error(error);
        deferred.reject(error);
      });

    } else {
      // No forward info, no need to stop.
      deferred.resolve();
    }

    return deferred.promise;
  }


  unpublishLocalFeed(): void {
    this.localHandle.send({ 'message': { 'request': 'unpublish' }});
  }


  private stopAndStartSdiForwarding(portsForwardInfo: IPortsForwardInfo,
      user: IUser,
      forwardIp: string,
      audioForwardIp: string,
      videoPort: number,
      audioPort: number,
      changeTitle: boolean): ng.IPromise<any> {
    // Stop (if exists) => Start => Update state => Callback.

    var deferred = this.$q.defer();

    var prevForwardInfo = portsForwardInfo[videoPort];
    var audioForwardInfo = portsForwardInfo[audioPort];
    var enableAudioForwarding = !!this.config.janus.enableAudioForwarding;
    if (!enableAudioForwarding) {
      audioForwardIp = null;
      audioPort = null;
    } else if (audioForwardInfo) {
      if (prevForwardInfo) {
        prevForwardInfo.audioStreamId = audioForwardInfo.audioStreamId;
        prevForwardInfo.otherAudioStreamExist = audioForwardInfo.otherAudioStreamExist;
      } else {
        prevForwardInfo = audioForwardInfo;
      }
    }

    // TODO: Stop forwarding on the full list of forwarders, not only one of them
    // There can be many forwarders for one port if stop failed due to network issues

    this.stopSdiForwarding(prevForwardInfo).then(() => {
      if (user.login) {
        if (user.login in this.publishers) {
          if (audioForwardIp && audioForwardIp !== forwardIp) {
            // Forward vido only.
            this.startSdiForwarding(user.login, forwardIp, videoPort, undefined).then((forwardInfo: IFeedForwardInfo) => {
              // Forward audio only to different ip.
              this.startSdiForwarding(user.login, audioForwardIp, undefined, audioPort).then((forwardInfo: IFeedForwardInfo) => {
                // Forwarding succeeded, changing titles
                if (changeTitle) {
                  this.changeRemoteFeedTitle(user.title, videoPort);
                }
                deferred.resolve();
              }, () => {
                var error = 'VideoRoom - error starting SDI forward.';
                this.$log.error(error);
                deferred.reject(error);
              });
            }, () => {
              var error = 'VideoRoom - error starting SDI forward.';
              this.$log.error(error);
              deferred.reject(error);
            });
          } else {
            this.startSdiForwarding(user.login, forwardIp, videoPort, audioPort).then((forwardInfo: IFeedForwardInfo) => {
              // Forwarding succeeded, changing titles
              if (changeTitle) {
                this.changeRemoteFeedTitle(user.title, videoPort);
              }
              deferred.resolve();
            }, () => {
              var error = 'VideoRoom - error starting SDI forward.';
              this.$log.error(error);
              deferred.reject(error);
            });
          }
        } else {
          this.$log.error('Could not find publisher with login', user.login);
          var error = `Could not find publisher with login ${user.login}`;
          this.toastr.error(error);
          deferred.reject(error);
        }
      } else {
        var error = 'VideoRoom - error no login, cannot start SDI forward.';
        this.$log.error(error);
        deferred.reject(error);
      }
    }, (error: string) => {
      this.$log.error(error);
      deferred.reject(error);
    });

    return deferred.promise;
  }

  // Handles changes in publishers state and updates registered clients (channel) if needed.
  private updatePublishersAndTriggerJoined(publishers: any[]): void {
    // TODO: Check that when overriding publisher it's id stays the same
    // Basically if it is not the same, meaning same user logged in for
    // example twice and we need to override the old publisher with new.
    publishers.forEach((p: any) => {
      this.$log.info('VideoRoom - updating publisher', p);

      // TODO: When we have joined timestamp check the timestamp
      // together with the login. Timestamp better be central.

      // The system has to make sure to remove publishers on time.
      // This should not happen, we have not handled leave user well!
      if (p.display in this.publishers) {
        this.$log.error('VideoRoom - publisher seen twice', p);
      }

      // Set or override publisher
      this.publishers[p.display] = p;

      // Handle channels
      this.applyOnUserChannels(p.display, (channel: IChannel) => {
        channel.joinedCallback(p.display);
      });
    });
  }

  // Helper method to call client (channel) on user events,
  // for example calls joinedCallback or leftCallback.
  private applyOnUserChannels(login: string, func: (channel: IChannel) => void): void {
    if (login in this.userChannels) {
      this.userChannels[login].forEach((channel: string) => {
        // Wrapping into $timeout for syncing the UI
        this.$timeout(() => {
          func(this.channels[channel]);
        });
      });
    } else {
      this.$log.warn('VideoRoom - not in any channel', login);
    }
  }

  private publisherIdToLogin(janusId: number) {
    var login = null;
    for (var key in this.publishers) {
      if (this.publishers.hasOwnProperty(key)) {
        var publisher = this.publishers[key];
        if (publisher.id === janusId) {
          login = publisher.display;
          break;
        }
      }
    }
    return login;
  }

  // Cleans up when publisher is leaving. Call relevant channels with leftCallback.
  private deletePublisher(login: string): void {
    if (login) {
      this.$log.info('VideoRoom - deleting', login);
      delete this.publishers[login];

      // This user may be in use. If so we need to unsubscribe his stream.
      this.unsubscribeFromStream(login);

      // Update channels on leaving user
      this.applyOnUserChannels(login, (channel: IChannel) => {
        channel.leftCallback(login);
      });
    }
  }

  /* Local Handle Methods */

  // Attaches local handle to Janus service.
  private attachLocalHandle(): ng.IPromise<any> {
    var attachedPromise = this.$q.defer();
    var streamReadyPromise = this.$q.defer();

    this.janus.initialized.then(() => {
      this.$log.info('VideoRoom - attach local handle');
      this.janus.session.attach({
        plugin: 'janus.plugin.videoroom',
        success: (pluginHandle: any) => {
          this.localHandle = pluginHandle;

          this.$log.info('VideoRoom - local handle attached, joining as publisher');
          this.localHandle.send({
            'message': {
              request: 'join',
              room: this.config.janus.videoRoom.roomId,
              ptype: 'publisher',
              display: this.localUserLogin
            },
            error: (response: any) => {
              this.$log.error('Error joining local handle', response);
              this.toastr.error(`Error joining video room: ${response}`);
            }
          });

          attachedPromise.resolve();
        },
        error: (error: any) => {
          this.$log.error('Error attaching videoroom plugin local handle', error);
          this.toastr.error(`Error attaching videoroom plugin: ${error}`);
          attachedPromise.reject(error);
        },
        onmessage: (msg: any, jsep: any) => {
          this.onLocalHandleMessage(msg, jsep);

          if (jsep) {
            this.$log.info('VideoRoom - local handle handling remote jsep');
            this.$log.debug(jsep);
            this.localHandle.handleRemoteJsep({
              jsep: jsep,
              error: (response: any) => this.$log.error('Error handling remote jsep', response)
            });
          }
        },
        consentDialog: (on: boolean) => {
          this.$log.info('VideoRoom - local handle consent dialog', on);
        },
        onlocalstream: (stream: MediaStream) => {
          this.$log.info('VideoRoom - handle onlocalstream', stream);
          this.localStream = stream;

          // Don't toggle audio false, we want to control it only form SDI.
          // Disable local audio tracks
          // this.toggleLocalAudio(false);

          streamReadyPromise.resolve(stream);
        },
        onremotestream: (stream: MediaStream) => {
          // This should not happen. This is local handle.
          this.$log.error('VideoRoom - local handle got a remote stream!', stream);
        },
        oncleanup: () => {
          this.$log.info('VideoRoom - local handle oncleanup');
        }
      });

    });

    this.localStreamReady = streamReadyPromise.promise;

    return attachedPromise.promise;
  }

  private onLocalHandleMessage(message: any, jsep: any): void {
    this.$log.debug('VideoRoom - handle local message', message);
    if (this.authService.can('operator')) {
      this.handleLocalOperatorMessage(message, jsep);
    } else {
      this.handleLocalUserMessage(message, jsep);
    }
  }

  private handleLocalOperatorMessage(message: any, jsep: any) {
    switch (message.videoroom) {
      case 'joined':
        if (message.publishers) {
          this.updatePublishersAndTriggerJoined(message.publishers);
        }
        if (this.localUserLogin) { // comes from user page
          this.publishLocalFeed();
        }
        break;
      case 'destroyed':
        this.$log.error('VideoRoom - room destroyed', message);
        this.toastr.error('Oh crap! video room has been destroyed');
        break;
      case 'event':
        if (message.publishers) {
          this.updatePublishersAndTriggerJoined(message.publishers);
        } else if (message.leaving) {
          this.deletePublisher(this.publisherIdToLogin(message.leaving));
        } else if (message.unpublished) {
          var login: string = this.publisherIdToLogin(message.unpublished);
          this.$log.info('Publisher left', login);
          // this.publisherStatusTracker.disconnect(login);
          this.deletePublisher(login);
        }
        break;
    }
  }

  private handleLocalUserMessage(message: any, jsep: any): void {
    switch (message.videoroom) {
      case 'joined':
        // Handling multiple logins
        if (this.handleMultipleLogins(message)) {
          return;
        }

        if (this.localUserLogin) {
          this.publishLocalFeed();
        } else {
          this.$log.error('VideoRoom - local user is not registered, not publishing local feed.');
        }
        break;
      case 'destroyed':
        this.$log.error('VideoRoom - room destroyed', message);
        this.toastr.error('Oh crap! video room has been destroyed');
        break;
    }
  }

  private handleMultipleLogins(message: any): boolean {
    var alreadyLoggedIn = message.publishers.filter((publisher: any) => {
      return publisher.display === this.localUserLogin;
    });

    if (alreadyLoggedIn.length) {
      this.toastr.error('You have already logged in from another place, please logout from there and try again <3');
      this.authService.logout().then(() => {
        // Not reloading immediately for the user to see the explanation message
        this.authService.authenticate().then(() => {
          window.location.reload();
        });
      });
      return true;
    }

    return false;
  }

  // Creates sdp offer, meaning two things already happened
  // 1) Media stream is connected and broadcasting video.
  // 2) Local handle is connected to Janus.
  private publishLocalFeed(): void {
    this.$log.info('VideoRoom - publish local feed, creating offer.');

    // noinspection TypeScriptValidateJSTypes
    this.localHandle.createOffer({
      media: {
        // Publishers are sendonly
        audioRecv: false,
        videoRecv: false,
        audioSend: true,
        videoSend: true,
        video: 'stdres-16:9'
      },
      success: (jsep: any) => {
        this.$log.info('VideoRoom - published local feed, configuring.');
        this.$log.debug(jsep);
        this.localHandle.send({
          'message': {'request': 'configure', 'audio': true, 'video': true},
          'jsep': jsep,
          error: (response: any) => this.$log.error('Error configuring local feed', response)
        });
      },
      error: (response: any) => {
        if (response === 'No capture device found') {
          this.toastr.error('We can\'t see you, please connect your camera.');
        } else if (response.name === 'PermissionDeniedError' || response.name === 'PermissionDismissedError') {
          var msg = `Error: ${response.message} <br />
            Please allow media permissions.
            <a href="https://support.google.com/chrome/answer/2693767?hl=en">
              For more details.
            </a>`;
          this.toastr.error(msg);
        } else if (response.name === 'MediaDeviceNotSupported') {
          this.$log.error(response.name, response);
          this.toastr.error(`Your browser doesn't support video device. </br>
            Please use
            <a href="//www.google.com/chrome/browser/desktop/">
              Chrome
            </a>.`);
        } else if (response !== undefined) {
          // Don't do nothing if was resolved before
          this.$log.error('Error creating SDP offer', response);
          this.toastr.error(`Bummers, can't share video: ${response.message}`);
        }
      }
    });
  }

  /* Remote Handle Methods */

  private onRemoteHandleMessage(handle: any, message: any, jsep: any): void {
    this.$log.debug('VideoRoom - handle remote message', message);

    if (message.videoroom === 'attached') {
      // TODO: Run spinner for currently attached remoteHandle.
      handle.rfid = message.id;
    }

    if (jsep) {
      this.$log.info('VideoRoom - Creating answer', handle.getId());
      this.$log.debug(jsep);

      // noinspection TypeScriptValidateJSTypes
      handle.createAnswer({
        jsep: jsep,
        media: { audioSend: false, videoSend: false },	// We want recvonly audio/video
        success: (jsep: any) => {
          this.$log.info('VideoRoom - got SDP, starting...', handle.getId());
          this.$log.debug(jsep);
          handle.send({
            'message': {'request': 'start', 'room': this.config.janus.videoRoom.roomId},
            'jsep': jsep,
            error: (response: any) => this.$log.error('Error starting videoroom SDP answer', response)
          });
        },
        error: (response: any) => {
          this.$log.error('Error creating videoroom SDP answer', response);
          this.toastr.error('WebRTC error: ' + response);
        }
      });
    }
  }

  private getForwarders(): ng.IPromise<any> {
    var deferred = this.$q.defer();

    var request = {
      request: 'listforwarders',
      room: this.config.janus.videoRoom.roomId,
      secret: this.config.janus.videoRoom.secret
    };

    this.localHandle.send({
      message: request,
      success: (data: any) => {
        var portsForwardInfo: IPortsForwardInfo = <IPortsForwardInfo>{};
        var audioStreamsCount = {};

        data.rtp_forwarders.forEach((rtpForwarder: any) => {

          rtpForwarder.rtp_forwarder.forEach((forwarder: any) => {

            if (!(rtpForwarder.display in audioStreamsCount)) {
              audioStreamsCount[rtpForwarder.display] = 0;
            }
            audioStreamsCount[rtpForwarder.display]++;

            portsForwardInfo[forwarder.port] = {
              login: rtpForwarder.display,
              publisherId: rtpForwarder.publisher_id,
              videoStreamId: forwarder.video_stream_id,
              audioStreamId: forwarder.audio_stream_id,
              otherAudioStreamExist: audioStreamsCount[rtpForwarder.display] > 1
            };
          });
        });

        deferred.resolve(portsForwardInfo);
      },
      error: (response: any) => {
        this.$log.error('Error getting RTP forwarders', response);
        deferred.reject(response);
      }
    });

    return deferred.promise;
  }

  private startSdiForwarding(login: string, forwardIp: string, videoPort: number, audioPort: number): ng.IPromise<any> {
    var deferred = this.$q.defer();

    var forward: any = {
      request: 'rtp_forward',
      publisher_id: this.publishers[login].id,
      room: this.config.janus.videoRoom.roomId,
      secret: this.config.janus.videoRoom.secret,
      host: forwardIp
    };
    if (videoPort) {
      forward.video_port = videoPort;
    }
    if (audioPort) {
      forward.audio_port = audioPort;
    }

    this.$log.info('VideoRoom - start SDI forwarding', login);
    this.localHandle.send({
      message: forward,
      success: (data: any) => {
        if (data.rtp_stream) {
          this.$log.info('VideoRoom - got rtp forward publisher', data.publisher_id);
          this.$log.debug('VideoRoom - got rtp forward video', data.rtp_stream.video_stream_id);
          this.$log.debug('VideoRoom - got rtp forward audio', data.rtp_stream.audio_stream_id);
          this.$log.debug(JSON.stringify(data));

          var forwardInfo = <IFeedForwardInfo> {
            // We don't have display at this poing :(
            // login: data.display,
            publisherId: data.publisher_id,
            videoStreamId: data.rtp_stream.video_stream_id,
            audioStreamId: data.rtp_stream.audio_stream_id
          };
          if (forwardInfo.audioStreamId) {
            // Start local audio for that user.
            this.pubSub.client.publish('/users/' + login, {
              message: 'toggleAudio',
              enabled: true
            }).then(() => {
              this.$log.debug('Turn on audio', login);
              deferred.resolve(forwardInfo);
            }, (error: any) => {
              this.$log.error('Error sending toggle audio command for', forwardInfo.login, error);
              this.toastr.error('Unable to toggle audio, error response recorded');
              deferred.reject();
            });
          } else {
            deferred.resolve(forwardInfo);
          }
        } else {
          this.$log.error('Error rtp_forward success data', data);
          deferred.reject();
        }
      },
      error: (response: any) => {
        this.$log.error('Error rtp_forward', response);
        deferred.reject();
      }
    });

    return deferred.promise;
  }

  private stopStreamForwarding(forwardInfo: IFeedForwardInfo, streamId: string): ng.IPromise<any> {
    var deferred = this.$q.defer();

    this.$log.info('VideoRoom - stop_rtp_forward', forwardInfo, streamId);
    this.localHandle.send({
      message: {
        request: 'stop_rtp_forward',
        stream_id: streamId,
        publisher_id: forwardInfo.publisherId,
        room: this.config.janus.videoRoom.roomId,
        secret: this.config.janus.videoRoom.secret
      },
      success: (data: any) => {
        deferred.resolve();
      },
      error: (response: any) => {
        this.$log.error('Error stop_rtp_forward ', response);
        deferred.reject();
      }
    });

    return deferred.promise;
  }

}
