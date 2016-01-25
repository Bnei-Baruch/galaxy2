import { IChannelScope } from '../channel.controller';
import { SmallChannelController } from './small.controller';

/** @ngInject */
export function smallChannelWidget(): ng.IDirective {

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
    templateUrl: 'app/components/channel/small/small.html',
    controller: SmallChannelController,
    controllerAs: 'vm',
    bindToController: true
  };

}
