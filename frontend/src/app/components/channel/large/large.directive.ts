import { IChannelScope } from '../channel.controller';
import { LargeChannelController } from './large.controller';

/** @ngInject */
export function largeChannelWidget(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      name: '@',
      users: '=',
      hotkey: '@'
    },
    link: ($scope: IChannelScope, el, attrs, ctrl) => {
      $scope.selfElement = el;
    },
    templateUrl: 'app/components/channel/large/large.html',
    controller: LargeChannelController,
    controllerAs: 'vm',
    bindToController: true
  };

}
