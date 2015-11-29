declare var attachMediaStream: any;
declare var Janus: any;

interface IChannel {
  name: string,
  users: string[],
  joinedCallback: (login: string) => void,
  leftCallback: (login: string) => void
}

interface IRemoteHandle {
  mediaElements: HTMLVideoElement[];
  handle: any;  // Janus handle instance
  stream?: MediaStream;
}

/* @ngInject */
export class JanusVideoRoomService {
  remoteHandles: { (login: string): IRemoteHandle } = <any>{};
  localHandle: any;
  channels: { (key: string): IChannel } = <any>{};
  session: any;
  config: any;
  toastr: any;

  // Reverse map of logins to channels names
  userChannels: { (login: string): string[] } = <any>{};

  // Mapping between login and inner Janus data
  publishers: { (login: string): any } = <any>{};

  userLogin: string;
  userVideoElement: HTMLVideoElement;
  localStream: MediaStream;
  joined: boolean;

  constructor(toastr: any, config: any) {
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

    $(window).unload(() => {
      this.hangupHandles();
      this.session.destroy();
    });
  }

  registerUser(login: string, element: HTMLVideoElement) {
    this.userLogin = login;
    this.userVideoElement = element;
    this.attachLocalMediaStream();
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
        this.toastr.error('Janus creation error: ' + error);
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
      if (p.display in self.userChannels) {
        self.userChannels[p.display].forEach((c) => {
          self.channels[c].joinedCallback(p.display);
        });
      }
    });
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
      // Update channels on leaving user.
      if (login in this.userChannels) {
        this.userChannels[login].forEach((c) => {
          this.channels[c].leftCallback(login);
        });
      }
    }
  }

  hangupHandle(handle: any) {
    var body = { 'request': 'stop' };
    handle.send({'message': body});
    handle.hangup();
  }

  hangupHandles() {
    this.hangupHandle(this.localHandle);
    for (var login in this.remoteHandles) {
      var handleInst = this.remoteHandles[login].handle;
      this.hangupHandle(handleInst);
    }
  }
  // Local Handle Methods

  attachLocalHandle() {
    var streaming;
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
          display: self.userLogin
        };
        self.localHandle.send({'message': register});
      },
      error: (error) => {
        self.toastr.error('Error attaching plugin: ' + error);
      },
      onmessage: (msg, jsep) => {
        self.onLocalVideoRoomMessage(streaming, msg, jsep);
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
        this.attachLocalMediaStream();
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

  attachLocalMediaStream() {
    if (this.joined) {
      if (!this.localStream) {
        // Local stream was not published, publish it.
        this.publishLocalFeed();
      } else {
        if (this.userVideoElement) {
          attachMediaStream(this.userVideoElement, this.localStream);
        } else {
          console.error('No local media element set.');
        }
      }
    } // If not joined, try to join here?
  }

  onLocalVideoRoomMessage(handle, message, jsep) {
    console.debug('Got a local message', message);

    var e = message.videoroom;

    switch (e) {
      case 'joined':
        this.joined = true;
        // TODO: Fix following variable formatting (does not work!)
        console.debug(`Successfully joined room ${message.room} with ID ${message.id}`);

        if (this.userVideoElement) {
          this.publishLocalFeed();
        } else {
          console.debug('No local media element. Not publishing local feed.');
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
          // Update leaving user.
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
        self.toastr.error('WebRTC error:', error.message);
        console.error('WebRTC error... ' + JSON.stringify(error));
      }
    });
  }


  /* Remote Handle Methods */

  attachRemoteHandle(login: string, mediaElement: HTMLVideoElement) {
    var self = this;
    var streaming;
    var handleInst = null;

    if (login in this.remoteHandles) {
      return this.attachExistingRemoteHandle(login, mediaElement);
    }

    this.session.attach({
      plugin: 'janus.plugin.videoroom',
      success: (pluginHandle) => {
        handleInst = pluginHandle;
				console.debug(`Remote handle attached ${handleInst.getPlugin()}, id=${handleInst.getId()}`);
        debugger;
        var handleContainer: IRemoteHandle = {
          mediaElements: [mediaElement],
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
        self.onRemoteVideoRoomMessage(handleInst, msg, jsep);
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
          attachMediaStream(mediaElement, stream);
        }
      },
      oncleanup: () => {
        console.debug('Got a cleanup notification');
      }
    });
  }

  attachExistingRemoteHandle(login: string, mediaElement: HTMLVideoElement) {
    var handleContainer = this.remoteHandles[login];
    handleContainer.mediaElements.push(mediaElement);
    attachMediaStream(mediaElement, handleContainer.stream);
  }

  onRemoteVideoRoomMessage(handle, message, jsep) {
    var self = this;

    console.debug('Got a remote message', message);

    if (message.videoroom === 'attached') {
      // TODO: Run spinner for currently attached remoteHandle.
      console.debug('Attaching remote handle');
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

  releaseRemoteHandle(login: string, mediaElement?: HTMLVideoElement) {
    if (!(login in this.remoteHandles)) {
      console.debug(`Remote handle is not attached for ${login}`);
      return;
    }

    var handleContainer = this.remoteHandles[login];

    if (mediaElement === undefined) {
      // No media element provided, detaching all handle elements
      handleContainer.mediaElements.forEach((element) => {
        element.src = null;
      });
      handleContainer.mediaElements = [];
    } else {
      // Detaching only one media element
      var elementIndex = handleContainer.mediaElements.indexOf(mediaElement);
      handleContainer.mediaElements.splice(elementIndex, 1);
      mediaElement.src = null;
    }

    if (handleContainer.mediaElements.length === 0) {
      this.hangupHandle(handleContainer.handle);
      delete this.remoteHandles[login];
    }
  }
}
