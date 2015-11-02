import { ChannelService } from './channel.service';

/** @ngInject */
export class ChannelController {
  toastr: any;
  users: any;
  janus: any;
  Janus: any;
  config: any;
  channel: ChannelService;
  pluginHandles: any[];

  constructor($scope: ng.IScope, channel: ChannelService, toastr: any, config: any, Janus: any) {
    this.config = config;
    this.toastr = toastr;
    this.channel = channel;
    this.Janus = Janus;
    this.pluginHandles = [];

  }

}
