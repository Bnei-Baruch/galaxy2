import { IChannelScope } from '../channel.controller';
import { ControlChannelController } from './channel.control.controller';

/** @ngInject */
export function channelControlWidget(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      name: '@',
      usersBreakdown: '=',
      hotkey: '@'
    },
    link: ($scope: IChannelScope, el, attrs, ctrl) => {
      $scope.selfElement = el;
      $scope.programElement = el.find('.program').get(0);
      $scope.previewElement = el.find('.preview').get(0);
    },
    templateUrl: 'app/components/channel/control/channel.control.html',
    controller: ControlChannelController,
    controllerAs: 'vm',
    bindToController: true
  };

}
