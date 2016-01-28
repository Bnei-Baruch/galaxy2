import { SlotController } from './slot.controller';

/** @ngInject */
export function slotWidget(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      kind: '@',
      showAudioToggle: '=',
      user: '=',
      isReady: '&',
      trigger: '&',
      toggleAudio: '&',
      hotkey: '='
    },
    link: ($scope: any, el: ng.IAugmentedJQuery) => {
      $scope.selfElement = el;
    },
    templateUrl: 'app/components/channel/slot/slot.html',
    controller: SlotController,
    controllerAs: 'vm',
    bindToController: true
  };

}

