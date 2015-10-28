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
  users: any;

  constructor(channel: ChannelService) {
    if (this.users.length) {
      var programStream = channel.getStream(this.users[0].login);
    }
  }
}
