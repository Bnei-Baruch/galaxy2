declare var escape: any;
declare var Janus: any;

interface IChannel {
  name: string,
  users: string[],
  joinedCallback: (login: string) => void,
  leftCallback: (login: string) => void
}

interface IRemoteHandle {
  count: number;
  handle: any;  // Janus handle instance
  stream?: MediaStream;
}

interface IFeedForwardInfo {
  publisherId: string,
  videoStreamId: string,
  audioStreamId: string
}

/* @ngInject */
export class JanusVideoRoomService {
  $q: ng.IQService;
  $timeout: ng.ITimeoutService;
  $http: ng.IHttpService;
  config: any;
  toastr: any;

  session: any;
  remoteHandles: { (login: string): IRemoteHandle } = <any>{};
  localHandle: any;
  channels: { (key: string): IChannel } = <any>{};
  portsFeedForwardInfo: { (key: number): IFeedForwardInfo } = <any> {};

  // Reverse map of logins to channels names
  userChannels: { (login: string): string[] } = <any>{};

  // Mapping between login and inner Janus data
  publishers: { (login: string): any } = <any>{};

  joined: boolean;
  localUserLogin: string;
  localStream: MediaStream;
  localStreamReadyCallback: (stream: MediaStream) => void;

  constructor($q: ng.IQService, $timeout: ng.ITimeoutService, $http: ng.IHttpService, toastr: any, config: any) {
    this.$q = $q;
    this.$timeout = $timeout;
    this.$http = $http;
    this.config = config;
    this.toastr = toastr;
    this.joined = false;

    if(!Janus.isWebrtcSupported()) {
      toastr.error('No WebRTC support... ');
      return;
    }

    Janus.init({
      debug: true,
      callback: () => {
        this.initCallback();
      }
    });

    $(window).on('beforeunload', () => {
      this.session.destroy();
      this.unpublishOwnFeed();
      // return "Are you sure want to leave this page?";
    });
  }

  registerLocalUser(login: string, streamReadyCallback: (stream: MediaStream) => void) {
    this.localUserLogin = login;
    this.localStreamReadyCallback = streamReadyCallback;

    if (this.localStream) {
      streamReadyCallback(this.localStream);
    } else if (this.localHandle) {
      this.publishLocalFeed();
    }
  }

  registerChannel(options: IChannel) {
    var self = this;

    this.channels[options.name] = options;

    options.users.forEach((login: string) => {
      // Store users lookup table by login
      if (!(login in self.userChannels)) {
        self.userChannels[login] = [];
      }

      // Add channel to user channels list
      var channels = self.userChannels[login];
      if (channels.indexOf(options.name) === -1) {
        channels.push(options.name);
      }
    });

    // TODO: User publishers list and call userJoined method
    // for relevant channels
  }

  initCallback() {
    this.session = new Janus({
      server: this.config.janus.serverUri,
      success: () => {
        this.attachLocalHandle();
      },
      error: (error) => {
        this.toastr.error(`Janus creation error: ${error}`);
      }
    });
  }

  updatePublishersAndTriggerJoined(publishers) {
    var self = this;

    console.log('Publishers', publishers);

    // TODO: Check that when overriding publisher it's id stays the same
    // Basically if it is not the same, meaning same user logged in for
    // example twice and we need to override the old publisher with new.
    publishers.forEach((p) => {

      // TODO: When we have joined timestamp check the timestamp
      // together with the login. Timestamp better be central.

      // The system has to make sure to remove publishers on time.
      if (p.display in self.publishers) {
        console.error('This should not happen, we have not handled leave user well!')
      }

      // Set or override publisher
      self.publishers[p.display] = p;

      // Handle channels
      this.applyOnUserChannels(p.display, (channel) => {
        channel.joinedCallback(p.display);
      });
    });
  }

  applyOnUserChannels(login: string, func: (channel: IChannel) => void) {
    if (login in this.userChannels) {
      this.userChannels[login].forEach((c) => {
        // Wrapping into $timeout for syncing the UI
        this.$timeout(() => {
          func(this.channels[c]);
        });
      });
    }
  }

  deletePublisherByJanusId(janusId) {
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
      this.applyOnUserChannels(login, (channel) => {
        channel.leftCallback(login);
      });
    }
  }

  unpublishOwnFeed() {
    var body = { 'request': 'unpublish' };
    this.localHandle.send({'message': body});
    console.debug(`Own feed unpublished for handle ${this.localHandle}`);
  }

  /* Local Handle Methods */

  attachLocalHandle() {
    var self = this;

    this.session.attach({
      plugin: 'janus.plugin.videoroom',
      success: (pluginHandle) => {
        self.localHandle = pluginHandle;

        // Try joining
        var register = {
          request: 'join',
          room: self.config.janus.roomId,
          ptype: 'publisher',
          display: self.localUserLogin
        };
        self.localHandle.send({'message': register});
      },
      error: (error) => {
        self.toastr.error('Error attaching plugin: ' + error);
      },
      onmessage: (msg, jsep) => {
        self.onLocalHandleMessage(msg, jsep);
        if (jsep) {
          console.debug('Handling SDP as well...');
          console.debug(jsep);
          self.localHandle.handleRemoteJsep({jsep: jsep});
        }
      },
      consentDialog: (on) => {
        console.debug('Consent dialog should be ' + (on ? 'on' : 'off') + ' now.');
      },
      onlocalstream: (stream) => {
        console.debug('Got local stream', stream);
        this.localStream = stream;
        this.localStreamReadyCallback(stream);
      },
      onremotestream: (stream) => {
        console.debug('Got a remote stream!', stream);
        // This should not happen. This is local handle.
      },
      oncleanup: () => {
        console.debug('Got a cleanup notification');
      }
    });
  }

  onLocalHandleMessage(message, jsep) {
    console.debug('Got a local message', message);

    var e = message.videoroom;

    switch (e) {
      case 'joined':
        this.joined = true;
        // TODO: Fix following variable formatting (does not work!)
        console.debug(`Successfully joined room ${message.room} with ID ${message.id}`);

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
        this.joined = false;
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

  publishLocalFeed() {
    var self = this;

    this.localHandle.createOffer({
      media: {
        // Publishers are sendonly
        audioRecv: false,
        videoRecv: false,
        audioSend: true,
        videoSend: true,
        video: 'stdres-16:9'
      },
      success: function(jsep) {
        console.debug('Got publisher SDP!');
        console.debug(jsep);

        var publish = { 'request': 'configure', 'audio': true, 'video': true };
        self.localHandle.send({'message': publish, 'jsep': jsep});
      },
      error: (error) =>{
        self.toastr.error(`WebRTC error: ${error.message}`);
        console.error('WebRTC error... ' + JSON.stringify(error));
      }
    });
  }


  /* Remote Handle Methods */

  subscribeForStream(login: string, streamReadyCallback: (stream: MediaStream) => void) {
    var self = this;
    var handleInst = null;

    if (login in this.remoteHandles) {
      this.remoteHandles[login].count++;
      return;
    }

    this.session.attach({
      plugin: 'janus.plugin.videoroom',
      success: (pluginHandle) => {
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
      error: (error) => {
        self.toastr.error('Error attaching plugin: ' + error);
      },
      onmessage: (msg, jsep) => {
        self.onRemoteHandleMessage(handleInst, msg, jsep);
      },
      onlocalstream: () => {
        // The subscriber stream is recvonly, we don't expect anything here
      },
      onremotestream: (stream) => {
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

  onRemoteHandleMessage(handle, message, jsep) {
    var self = this;

    console.debug('Got a remote message', message);

    if (message.videoroom === 'attached') {
      // TODO: Run spinner for currently attached remoteHandle.
      console.debug('Attaching remote handle');
      handle.rfid = message.id;
    }

    if(jsep) {
      console.debug('Handling SDP as well...');
      console.debug(jsep);

      // Answer and attach
      handle.createAnswer({
        jsep: jsep,
        media: { audioSend: false, videoSend: false },	// We want recvonly audio/video
        success: (jsep) => {
          console.debug('Got SDP!');
          console.debug(jsep);
          var body = { 'request': 'start', 'room': self.config.janus.roomId };
          handle.send({'message': body, 'jsep': jsep});
        },
        error: (error) => {
          console.error('WebRTC error:', error);
          self.toastr.error('WebRTC error... ' + JSON.stringify(error));
        }
      });
    }
  }

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

  // Forward stream to janus port
  forwardRemoteFeed(login, port) {
    var self = this;
    var deferred = this.$q.defer();

    if (!(login in this.remoteHandles)) {
      this.toastr.error(`Could not find remote handle for ${login}`);
      return;
    }

    var handleContainer = this.remoteHandles[login];
    var rmid = handleContainer.handle.rfid;

    // Forward remote rtp stream
    if (port in this.portsFeedForwardInfo) {
      var forwardInfo = this.portsFeedForwardInfo[port];

      console.log(`  -- We need to stop rtp forward video ID: ${forwardInfo.videoStreamId}`);
      console.log(`  -- We need to stop rtp forward audio ID: ${forwardInfo.audioStreamId}`);
      console.log(`  -- We need to stop rtp forward publisher ID: ${forwardInfo.publisherId}`);

      var stopfwVideo = {
        'request': 'stop_rtp_forward',
        'stream_id': forwardInfo.videoStreamId,
        'publisher_id': forwardInfo.publisherId,
        'room': self.config.janus.roomId,
        'secret': self.config.janus.secret
      };
      // TODO: handle stop answers
      this.localHandle.send({
        message: stopfwVideo,
        success: (data) => {
          console.log('Forwarding stopped successfully for', forwardInfo);
          deferred.resolve(true);
        },
        error: (resp) => {
          console.error('Error stopping forwarding', forwardInfo, resp);
          deferred.resolve(false);
        }
      });

      return deferred.promise;
    }

    var forward = {
      'request': 'rtp_forward',
      'publisher_id': rmid,
      'room': self.config.janus.roomId,
      'secret': self.config.janus.secret,
      'host': self.config.janus.serverIp,
      'video_port': port
    };

    this.localHandle.send({
      message: forward,
      success: (data) => {
        self.portsFeedForwardInfo[port] = <IFeedForwardInfo> {
          publisherId: data.publisher_id,
          videoStreamId: data.rtp_stream.video_stream_id,
          audioStreamId: data.rtp_stream.audio_stream_id
        };

        console.log(`  -- We got rtp forward video ID: ${data.rtp_stream.video_stream_id}`);
        console.log(`  -- We got rtp forward audio ID: ${data.rtp_stream.audio_stream_id}`);
        console.log(`  -- We got rtp forward publisher ID: ${data.publisher_id}`);
        console.log(JSON.stringify(data));
      },
    });
  }

  changeRemoteFeedTitle(title: string, port: number) {
    var titleApiUrl = this.config.janus.titleApiUrl
      .replace('%title%', escape(title))
      .replace('%port%', port);

    this.$http.get(titleApiUrl).error((data, st) => {
      this.toastr.error(`Unable to change remote feed to ${title}`);
      console.error('Unable to change remote feed:', data, st);
    });
  }
}
