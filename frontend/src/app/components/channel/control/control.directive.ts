import { IChannelScope } from '../channel.controller';
import { ControlChannelController } from './control.controller';

/** @ngInject */
export function controlChannelWidget(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      name: '@',
      usersBreakdown: '=',
      hotkey: '@'
    },
    link: ($scope: IChannelScope, el, attrs, ctrl) => {
      $scope.selfElement = el;
    },
    templateUrl: 'app/components/channel/control/control.html',
    controller: ControlChannelController,
    controllerAs: 'vm',
    bindToController: true
  };

}
