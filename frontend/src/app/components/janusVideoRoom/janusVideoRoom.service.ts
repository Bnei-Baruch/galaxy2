declare var attachMediaStream: any;
declare var Janus: any;

export class JanusVideoRoomService {
  pluginHandles: any[];

  constructor(toastr: any, config: any) {
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

  initCallback() {
    this.session = new this.Janus({
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
      plugin: "janus.plugin.streaming",
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
        debugger;
      },
      onremotestream: (stream) => {
        console.debug("Got a remote stream!", stream);

        attachMediaStream($(mediaElementSelector).get(0), stream);
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
