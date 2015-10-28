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
}
