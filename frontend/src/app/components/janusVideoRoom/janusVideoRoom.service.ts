declare var attachMediaStream: any;
declare var Janus: any;

interface IChannel {
  name: string,
  users: string[],
  joinedCallback: (login: string) => void,
  leftCallback: (login: string) => void
}

/* @ngInject */
export class JanusVideoRoomService {
  pluginHandles: any[];
  session: any;
  config: any;
  toastr: any;
  localHandle: any;
  channels: { (key: string): IChannel };
  // Reverse map of logins to channels names.
  userChannels: { (login: string): string[] };

  // Mapping between login and inner Janus data;
  publishers: { (login: string): any };

  userLogin: string;
  userElement: Element;
  joined: boolean;

  constructor(toastr: any, config: any) {
    this.config = config;
    this.toastr = toastr;
    this.channels = <any> {};
    this.userChannels = <any> {};
    this.pluginHandles = [];
    this.joined = false;

    if(!Janus.isWebrtcSupported()) {
      toastr.error("No WebRTC support... ");
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

  registerUser(login: string, element: Element) {
    this.userLogin = login;
    this.userElement = element;
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
      if (channels.indexOf(options.name) == -1) {
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

  updatePublishersAndSendJoined(publishers) {
    // TODO: Check that when overriding publisher it's id stays the same
    publishers.forEach((p) => {
      // TODO: When we have joined timestamp check the timestamp
      // together with the login. Timestamp better be central.
      if (!(p.display in this.publishers)) {
        this.publishers[p.display] = p;
        this.userChannels[p.display].forEach((c) => {
          c.userJoined(p);
        });
      }
    });
  }

  hangupHandles() {
    this.pluginHandles.forEach((handle) => {
      var body = { "request": "stop" };
      handle.send({"message": body});
      handle.hangup();
    });
  }
  // Local Handle Methods

  attachLocalHandle() {
    var streaming;
    var self = this;

    this.session.attach({
      plugin: "janus.plugin.videoroom",
      success: (pluginHandle) => {
        self.localHandle = pluginHandle;
        self.pluginHandles.push(self.localHandle);

        // Try joining
        var register = {
          request: "join",
          room: 1,
          ptype: "publisher",
          display: self.userLogin
        };
        self.localHandle.send({"message": register});
      },
      error: (error) => {
        self.toastr.error("Error attaching plugin: " + error);
      },
      onmessage: (msg, jsep) => {
        self.onLocalVideoRoomMessage(streaming, msg, jsep);
      },
      onlocalstream: (stream) => {
        debugger;
        attachMediaStream(self.userElement, stream);
      },
      onremotestream: (stream) => {
        console.debug("Got a remote stream!", stream);
        // This should not happen. This is local handle.
        debugger;
      },
      oncleanup: () => {
        console.debug("Got a cleanup notification");
      }
    });
  }

  onLocalVideoRoomMessage(handle, message, jsep) {
    console.debug("Got a message", message);

    var e = message.videoroom;

    switch (e) {
      case "joined":
        this.joined = true;
        console.debug("Successfully joined room ${message.room} with ID ${message.id}");

        //this.userElements.forEach((login, element) => {
        if (this.userElement) {
          this.publishLocalFeed();
        };

        if (message.publishers) {
          debugger;
          this.updatePublishersAndSendJoined(message.publishers);
        }
        break;
      case "destroyed":
        this.joined = false;
        this.toastr.error("The room has been destroyed");
        debugger;
        break;
      case "event":
        if (message.publishers) {
          debugger;
          this.updatePublishersAndSendJoined(message.publishers);
        } else if (message.leaving) {
          // Update leaving user.
        }
        break;
    }
  }

  publishLocalFeed() {
    var self = this;

    this.localHandle.createOffer({
      media: { audioRecv: false, videoRecv: false, audioSend: true, videoSend: true},	// Publishers are sendonly
      success: function(jsep) {
        console.debug("Got publisher SDP!");
        console.debug(jsep);
        var publish = { "request": "configure", "audio": true, "video": true };
        self.localHandle.send({"message": publish, "jsep": jsep});
      },
      error: (error) =>{
        self.toastr.error("WebRTC error:", error.message);
        console.error("WebRTC error... " + JSON.stringify(error));
      }
    });
  }



  // Remote Handle Methods

  attachRemoteHandle(login, mediaElement) {
    var streaming;
    var self = this;
    var remoteHandle = null;

    this.session.attach({
      plugin: "janus.plugin.videoroom",
      success: (pluginHandle) => {
        remoteHandle = pluginHandle;
				console.debug("Remote handle attached ${remoteHandle.getPlugin()}, id=${remoteHandle.getId()}");
        self.pluginHandles.push(remoteHandle);
      },
      error: (error) => {
        self.toastr.error("Error attaching plugin: " + error);
      },
      onmessage: (msg, jsep) => {
        self.onRemoteVideoRoomMessage(streaming, msg, jsep);
      },
      onlocalstream: () => {
        // The subscriber stream is recvonly, we don't expect anything here
        debugger;
      },
      onremotestream: (stream) => {
        console.debug("Got a remote stream!", stream);

				console.debug("Remote feed #${remoteHandle.rfindex}");

        if (stream.login == login) {
          attachMediaStream(mediaElement, stream);
        }
      },
      oncleanup: () => {
        console.debug("Got a cleanup notification");
      }
    });
  }

  onRemoteVideoRoomMessage(handle, message, jsep) {
    console.debug("Got a message", message);

    var e = message.videoroom;

    switch (e) {
      case "joined":
        break;
      case "destroyed":
        break;
      case "event":
        break;
    }
  }
}
