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
      hotkey: '=',
      users: '='
    },
    link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs?: ng.IAttributes, ctrl?: SlotController) => {
      ctrl.onLink(scope, element);
    },
    templateUrl: 'app/components/channel/slot/slot.html',
    controller: SlotController,
    controllerAs: 'vm',
    bindToController: false
  };

}

