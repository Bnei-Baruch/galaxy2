declare var attachMediaStream: any;
declare var Janus: any;

interface IChannel {
  name: string,
  users: IUsers,
  joinedCallback: (login: string) => void,
  leftCallback: (login: string) => void)
}

export class JanusVideoRoomService {
  pluginHandles: any[];
  session: any;
  config: any;
  toastr: any;
  localHandle: any;
  channels: { (key: string): IChannel };
  // Reverse map of logins to channels names.
  userChannels: { (login: string): string[] };

  constructor(toastr: any, config: any) {
    this.config = config;
    this.toastr = toastr;

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

  registerChannel(options: IChannel) {
    this.channels[options.name] = options;
    options.name.users.forEach((user) => {
      if (this.userChannels.indexOf(user.login) == -1) {
        this.userChannels[user.login] = [];
      }
      var channels = this.userChannels[user.login];

      if (channels.indexOf(options.name) == -1) {
        channels.push(options.name);
      }
    });
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

  attachLocalHandle() {
    var streaming;
    var self = this;

    this.session.attach({
      plugin: "janus.plugin.videoroom",
      success: (pluginHandle) => {
        self.localHandle = pluginHandle;
        self.pluginHandles.push(self.localHandle);
      },
      error: (error) => {
        self.toastr.error("Error attaching plugin: " + error);
      },
      onmessage: (msg, jsep) => {
        self.onVideoRoomMessage(streaming, msg, jsep);
      },
      onlocalstream: () => {
        // The subscriber stream is recvonly, we don't expect anything here
        debugger;
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
        self.onVideoRoomMessage(streaming, msg, jsep);
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

  onVideoRoomMessage(handle, message, jsep) {
    console.debug("Got a message", message);

    var e = message.videoroom;

    switch (e) {
      case "joined":
        console.debug("Successfully joined room ${message.room} with ID ${message.id}");

        if (message.publishers) {
          ////
        }
        break;
      case "destroyed":
        this.toastr.error("The room has been destroyed");
        debugger;
        break;
      case "event":
        if (message.publishers) {
          message.publishers.forEach(publisher) {

            this.attachRemoteHandle(publisher.id, publisher.display);
          }
        }
        break;
    }
  }

  hangupHandles() {
    this.pluginHandles.forEach((handle) => {
      var body = { "request": "stop" };
      handle.send({"message": body});
      handle.hangup();
    });
  }
}
