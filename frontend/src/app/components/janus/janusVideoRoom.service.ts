import { AuthService } from '../auth/auth.service';
import { JanusService } from './janus.service';

/**
 * Library to handle communication with Janus.
 * API:
 *
 * Group methods
 * =============
 *
 * registerLocalUser(login: string, streamReadyCallback: (stream: MediaStream) => void)
 * Connect local media stream to Janus (sending video/audio?)
 *
 * Channel methods
 * ===============
 *
 * registerChannel(options: IChannel)
 * Register channel with specific users so that each joined
 * or leaving user will notify the client (channel).
 *
 * subscribeForStream(login: string, streamReadyCallback: (stream: MediaStream) => void)
 * Register to receive when remote 'login' starts streaming his MediaStream
 *
 * unsubscribeFromStream(login: string)
 * Stop getting updates on specific remote 'login'.
 *
 * SDI methods
 * ===========
 *
 * forwardRemoteFeeds(logins: string[], videoPorts: number[], audioPorts: number[]) returns Promise
 * Forward stream to janus port (sdi).
 *
 * changeRemoteFeedTitle(title: string, port: number)
 * Change Title on some janus port (sdi).
 *
 */

declare var escape: any;

interface IChannel {
  name: string;
  users: string[];
  joinedCallback: (login: string) => void;
  leftCallback: (login: string) => void;
}

interface IShidurState {
  janus: {
    portsFeedForwardInfo: {
      (key: number): IFeedForwardInfo
    }
  };
}

interface IRemoteHandle {
  count: number;
  handle: any;  // Janus handle instance
  stream?: MediaStream;
}

interface IFeedForwardInfo {
  publisherId: string;
  videoStreamId: string;
  audioStreamId: string;
}

/* @ngInject */
export class JanusVideoRoomService {
  localHandleAttached: ng.IPromise<any>;
  localStreamReady: ng.IPromise<any>;

  remoteHandles: { (login: string): IRemoteHandle } = <any>{};
  localHandle: any;
  channels: { (key: string): IChannel } = <any>{};

  // Reverse map of logins to channels names
  userChannels: { (login: string): string[] } = <any>{};

  // Mapping between login and inner Janus data
  publishers: { (login: string): any } = <any>{};

  localUserLogin: string;
  localStream: MediaStream;

  constructor(private $q: ng.IQService,
      private $rootScope: ng.IRootScopeService,
      private $timeout: ng.ITimeoutService,
      private $http: ng.IHttpService,
      private authService: AuthService,
      private janus: JanusService,
      private toastr: any,
      private config: any) {

    this.localHandleAttached = this.attachLocalHandle();

    $rootScope.$on('janus.destroy', () => {
      this.unpublishOwnFeed();
    });
  }

  // API method for javascript client to connect local media stream to Janus (sending video/audio?)
  registerLocalUser(login: string, streamReadyCallback: (stream: MediaStream) => void) {
    this.localUserLogin = login;

    this.localHandleAttached.then(() => {
      this.localStreamReady.then((stream: MediaStream) => {
        streamReadyCallback(stream);
      });
    });
  }

  // API method for javascript client to register channel with specific users so that each joined
  // or leaving user will notify the client (channel).
  registerChannel(options: IChannel) {
    this.channels[options.name] = options;

    this.updateChannelUsers(options.name, options.users);

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

  // When current client is closed, sends self unpublish event to Janus.
  unpublishOwnFeed() {
    var body = {request: 'unpublish'};
    this.localHandle.send({message: body});
    console.debug(`Own feed unpublished for handle ${this.localHandle}`);
  }

  // API method for clients (channel) to register to receive when remote 'login' starts streaming his MediaStream
  subscribeForStream(login: string, streamReadyCallback: (stream: MediaStream) => void) {
    // TODO: implement timeout

    var self = this;
    var handleInst = null;

    if (login in this.remoteHandles) {
      var loginHandle = this.remoteHandles[login];
      loginHandle.count++;
      streamReadyCallback(loginHandle.stream);
      return;
    }

    this.janus.session.attach({
      plugin: 'janus.plugin.videoroom',
      success: (pluginHandle: any) => {
        handleInst = pluginHandle;
				console.debug(`Remote handle attached ${handleInst.getPlugin()}, id=${handleInst.getId()}`);
        var handleContainer: IRemoteHandle = {
          count: 1,
          handle: handleInst,
        };
        self.remoteHandles[login] = handleContainer;

        // TODO: This publisher id is of old video stream, it should be overriden when
        // same group enters again.
        var id = self.publishers[login].id;
        var listen = { 'request': 'join', 'room': self.config.janus.roomId, 'ptype': 'listener', 'feed': id };
        handleInst.send({'message': listen});
      },
      error: (error: any) => {
        self.toastr.error('Error attaching plugin: ' + error);
      },
      onmessage: (msg: any, jsep: any) => {
        self.onRemoteHandleMessage(handleInst, msg, jsep);
      },
      onlocalstream: () => {
        // The subscriber stream is recvonly, we don't expect anything here
      },
      onremotestream: (stream: MediaStream) => {
        console.debug('Got a remote stream!', stream);
				console.debug(`Remote feed:`, handleInst);
        if (!(login in self.remoteHandles)) {
          console.error(`Remote handle not attached for ${login}`);
        } else {
          self.remoteHandles[login].stream = stream;

          self.$timeout(() => {
            streamReadyCallback(stream);
          });
        }
      },
      oncleanup: () => {
        console.debug('Got a cleanup notification');
      }
    });
  }

  // API for client (channel) to stop getting updates on specific remote 'login'
  unsubscribeFromStream(login: string) {
    if (login in this.remoteHandles) {
      var handleItem = this.remoteHandles[login];
      handleItem.count--;

      if (!handleItem.count) {
        handleItem.handle.detach();
        delete this.remoteHandles[login];
      }
    } else {
      console.debug(`Remote handle is not attached for ${login}`);
    }
  }

  /**
   * Forward streams to janus ports
   * @returns List of promises for every video port provided
   */
  forwardRemoteFeeds(logins: string[], forwardIp: string, videoPorts: number[], audioPorts?: number[]): ng.IPromise<any> {
    return this.getAndUpdateShidurState((shidurState: IShidurState) => {
      var deffered = this.$q.defer();

      var forwardPromises = logins.map((login: string, index: number) => {
        var audioPort = (audioPorts || [])[index];
        return this.stopAndStartSdiForwarding(shidurState, login, forwardIp, videoPorts[index], audioPort);
      });

      this.$q.all(forwardPromises).then(() => {
        deffered.resolve(shidurState);
      }, () => {
        console.error('One or more forwards haven\' been accomplished, saving shidur state...');
        deffered.resolve(shidurState);
      });

      return deffered.promise;
    });
  }

  stopAndStartSdiForwarding(shidurState: IShidurState,
      login: string,
      forwardIp: string,
      videoPort: number,
      audioPort: number): ng.IPromise<any> {
    var deffered = this.$q.defer();

    // Stop (if exists) => Start => Update state => Callback.
    var prevForwardInfo = shidurState.janus.portsFeedForwardInfo[videoPort];

    var startForwardingCallback = (forwardInfo: IFeedForwardInfo) => {
      shidurState.janus.portsFeedForwardInfo[videoPort] = forwardInfo;

      if (audioPort) {
        shidurState.janus.portsFeedForwardInfo[audioPort] = forwardInfo;
      }

      deffered.resolve();
    };

    this.stopSdiForwarding(prevForwardInfo, () => {
      if (login) {

        if (!(login in this.publishers)) {
          var error = `Could not find publisher with login ${login}`;
          this.toastr.error(error);
          deffered.resolve(error);
        } else {
          this.startSdiForwarding(login, forwardIp, videoPort, audioPort, startForwardingCallback);
        }

      } else {
        delete shidurState.janus.portsFeedForwardInfo[videoPort];
        deffered.resolve();
      }
    });

    return deffered.promise;
  }

  changeRemoteFeedTitle(title: string, port: number) {
    var titleApiUrl = this.config.janus.titleApiUrl
      .replace('%title%', escape(title))
      .replace('%port%', port);

    this.$http.get(titleApiUrl).error((data: any, st: any) => {
      /* this.toastr.error(`Unable to change remote feed to ${title}`); */
      console.error('Unable to change remote feed:', data, st);
    });
  }

  toggleLocalAudio(enabled: boolean) {
    var audioTracks = this.localStream.getAudioTracks();
    audioTracks.forEach((audioTrack: MediaStreamTrack) => {
      audioTrack.enabled = enabled;
    });
  }

  // Handles changes in publishers state and updates registered clients (channel) if needed.
  private updatePublishersAndTriggerJoined(publishers: any[]): void {
    // TODO: Check that when overriding publisher it's id stays the same
    // Basically if it is not the same, meaning same user logged in for
    // example twice and we need to override the old publisher with new.
    publishers.forEach((p: any) => {

      // TODO: When we have joined timestamp check the timestamp
      // together with the login. Timestamp better be central.

      // The system has to make sure to remove publishers on time.
      if (p.display in this.publishers) {
        console.error('This should not happen, we have not handled leave user well!');
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
    }
  }

  // Cleans up when publisher is leaving. Call relevant channels with leftCallback.
  private deletePublisherByJanusId(janusId: string): void {
    var login = null;

    for (var key in this.publishers) {
      var publisher = this.publishers[key];
      if (publisher.id === janusId) {
        login = publisher.display;
        break;
      }
    };
    if (login) {
      delete this.publishers[login];
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

      this.janus.session.attach({
        plugin: 'janus.plugin.videoroom',
        success: (pluginHandle: any) => {
          this.localHandle = pluginHandle;

          // Try joining
          var register = {
            request: 'join',
            room: this.config.janus.roomId,
            ptype: 'publisher',
            display: this.localUserLogin
          };
          this.localHandle.send({'message': register});

          attachedPromise.resolve();
        },
        error: (error: any) => {
          this.toastr.error('Error attaching plugin: ' + error);
          attachedPromise.reject();
        },
        onmessage: (msg: any, jsep: any) => {
          this.onLocalHandleMessage(msg, jsep);

          if (jsep) {
            console.debug('Handling SDP as well...');
            console.debug(jsep);
            this.localHandle.handleRemoteJsep({jsep: jsep});
          }
        },
        consentDialog: (on: boolean) => {
          console.debug('Consent dialog should be ' + (on ? 'on' : 'off') + ' now.');
        },
        onlocalstream: (stream: MediaStream) => {
          console.debug('Got local stream', stream);
          this.localStream = stream;

          // Disable local audio tracks
          this.toggleLocalAudio(false);

          streamReadyPromise.resolve(stream);
        },
        onremotestream: (stream: MediaStream) => {
          console.debug('Got a remote stream!', stream);
          // This should not happen. This is local handle.
        },
        oncleanup: () => {
          console.debug('Got a cleanup notification');
        }
      });

    });

    this.localStreamReady = streamReadyPromise.promise;

    return attachedPromise.promise;
  }

  private onLocalHandleMessage(message: any, jsep: any): void {
    console.debug('Got a local message', message);

    var e = message.videoroom;

    switch (e) {
      case 'joined':
        // TODO: Fix following variable formatting (does not work!)
        console.debug(`Successfully joined room ${message.room} with ID ${message.id}`);

        // Handling multiple logins
        if (this.handleMultipleLogins(message)) {
          return;
        }

        if (this.localUserLogin) {
          this.publishLocalFeed();
        } else {
          console.debug('No local user registered. Not publishing local feed.');
        };

        if (message.publishers) {
          this.updatePublishersAndTriggerJoined(message.publishers);
        }
        break;
      case 'destroyed':
        this.toastr.error('The room has been destroyed');
        break;
      case 'event':
        if (message.publishers) {
          this.updatePublishersAndTriggerJoined(message.publishers);
        } else if (message.leaving) {
          // Update leaving user
          console.debug('Local handle leaving room.');
          this.deletePublisherByJanusId(message.leaving);
        }
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
        console.debug('Got publisher SDP!');
        console.debug(jsep);

        var publish = { 'request': 'configure', 'audio': true, 'video': true };
        this.localHandle.send({'message': publish, 'jsep': jsep});
      },
      error: (error: any) => {
        this.toastr.error(`WebRTC error: ${error.message}`);
        console.error('WebRTC error... ' + JSON.stringify(error));
      }
    });
  }


  /* Remote Handle Methods */

  private onRemoteHandleMessage(handle: any, message: any, jsep: any): void {
    var self = this;

    console.debug('Got a remote message', message);

    if (message.videoroom === 'attached') {
      // TODO: Run spinner for currently attached remoteHandle.
      console.debug('Attaching remote handle');
      handle.rfid = message.id;
    }

    if (jsep) {
      console.debug('Handling SDP as well...');
      console.debug(jsep);

      // Answer and attach
      handle.createAnswer({
        jsep: jsep,
        media: { audioSend: false, videoSend: false },	// We want recvonly audio/video
        success: (jsep: any) => {
          console.debug('Got SDP!');
          console.debug(jsep);
          var body = { 'request': 'start', 'room': self.config.janus.roomId };
          handle.send({'message': body, 'jsep': jsep});
        },
        error: (error: any) => {
          console.error('WebRTC error:', error);
          self.toastr.error('WebRTC error... ' + JSON.stringify(error));
        }
      });
    }
  }

  private getAndUpdateShidurState(useShidurState: (shidurState: IShidurState) => ng.IPromise<any>): ng.IPromise<any> {
    var deffered = this.$q.defer();

    this.$http.get(this.config.backendUri + '/rest/shidur_state')
      .error((data: string, status: number) => {
        deffered.reject('Fetching shidur state returns error: ' + status + ' ' + data);
      })
      .success((shidurState: IShidurState) => {
        if (!shidurState.janus) {
          shidurState.janus = <any>{};
        }
        if (!shidurState.janus.portsFeedForwardInfo) {
          shidurState.janus.portsFeedForwardInfo = <any>{};
        }

        // Do something with shidur state and update it.
        useShidurState(shidurState).then(() => {

          // Post shidur state to backend.
          this.$http.post(this.config.backendUri + '/rest/shidur_state', shidurState)
            .error((data: string, status: number) => {
              deffered.reject(`Updating shidur state returns error: ${status} ${data}`);
            })
            .success(() => {
              this.$timeout(() => {
                deffered.resolve();
              });
            });
        }, () => {
          deffered.reject('Failed using shidur state');
        });
      });

    return deffered.promise;
  }

  private startSdiForwarding(login: string, forwardIp: string, videoPort: number, audioPort: number,
      callback: (forwardInfo: IFeedForwardInfo) => void): void {
    var self = this;

    var forward: any = {
      request: 'rtp_forward',
      publisher_id: this.publishers[login].id,
      room: self.config.janus.roomId,
      secret: self.config.janus.secret,
      host: forwardIp,
      video_port: videoPort
    };

    if (audioPort) {
      forward.audio_port = audioPort;
    }

    this.localHandle.send({
      message: forward,
      error: (error: any) => {
        console.error(error);
        callback(null);
      },
      success: (data: any) => {
        var forwardInfo = <IFeedForwardInfo> {
          publisherId: data.publisher_id,
          videoStreamId: data.rtp_stream.video_stream_id,
          audioStreamId: data.rtp_stream.audio_stream_id
        };

        console.log(`  -- We got rtp forward video ID: ${data.rtp_stream.video_stream_id}`);
        console.log(`  -- We got rtp forward audio ID: ${data.rtp_stream.audio_stream_id}`);
        console.log(`  -- We got rtp forward publisher ID: ${data.publisher_id}`);
        console.log(JSON.stringify(data));

        callback(forwardInfo);
      },
    });
  }

  private stopSdiForwarding(forwardInfo: IFeedForwardInfo, callback: () => void): void {
    if (forwardInfo) {
      console.log(`  -- We need to stop rtp forward video ID: ${forwardInfo.videoStreamId}`);
      console.log(`  -- We need to stop rtp forward audio ID: ${forwardInfo.audioStreamId}`);
      console.log(`  -- We need to stop rtp forward publisher ID: ${forwardInfo.publisherId}`);

      // Stop video and then audio forwarding
      this.stopStreamForwarding(forwardInfo, forwardInfo.videoStreamId, () => {
        this.stopStreamForwarding(forwardInfo, forwardInfo.audioStreamId, () => {
          callback();
        });
      });

    } else {
      console.log('No forwardInfo, assuming no stream to SDI port');
      callback();
    }

  }

  private stopStreamForwarding(forwardInfo: IFeedForwardInfo, streamId: string, callback: () => void): void {
    var self = this;

    if (!streamId) {
      callback();
      return;
    }

    var stopFwMessage = {
      request: 'stop_rtp_forward',
      stream_id: streamId,
      publisher_id: forwardInfo.publisherId,
      room: self.config.janus.roomId,
      secret: self.config.janus.secret
    };

    this.localHandle.send({
      message: stopFwMessage,
      success: (data: any) => {
        console.log('Forwarding stopped successfully for stream ID', streamId, forwardInfo);
        callback();
      },
      error: (resp: any) => {
        console.error('Error stopping forwarding for stream ID', streamId, forwardInfo, resp);
        callback();
      }
    });
  }

}
