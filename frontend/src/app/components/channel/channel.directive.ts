import { ChannelService } from './channel.service';

/** @ngInject */
export function channelWidget(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      users: '='
    },
    templateUrl: 'app/components/channel/channel.html',
    controller: ChannelController,
    controllerAs: 'vm',
    bindToController: true
  };

}

/** @ngInject */
export class ChannelController {
  toastr: any;
  users: any;
  janus: any;
  Janus: any;
  config: any;
  channel: ChannelService;
  pluginHandles: any[];

  constructor($scope: ng.IScope, channel: ChannelService, toastr: any, Janus: any, config: any) {
    this.config = config;
    this.toastr = toastr;
    this.channel = channel;
    this.Janus = Janus;

    Janus.init({
      debug: true,
      callback: () => {
        this.initCallback();
      }
    });

    $(window).unload(() => {
      this.hangupHandles();
      this.janus.destroy();
    });
  }

  initCallback() {
    if (this.users.length) {
      var programStream = this.channel.getStream(this.users[0].login);

      this.janus = new this.Janus({
          server: this.config.janus.serverUri,
          success: () => {
              // // 1 is hard coded value for Video stream
              // attachStreamingHandle(1, '#remoteVideo');
              // // 2 is hard coded value for Hebrew audio stream
              // attachStreamingHandle(2, '#remoteAudio');
          },
          error: (error) => {
            this.toastr.error('Janus creation error: ' + error);
          }
      });
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
