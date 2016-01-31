import { SlotController } from './slot.controller';

/** @ngInject */
export function slotWidget($mdDialog: angular.material.IDialogService): ng.IDirective {

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
    link: (scope: ng.IScope, el: ng.IAugmentedJQuery) => {
      el.bind('contextmenu', (e: any) => {
        scope.$apply(() => {
          e.preventDefault();
          $mdDialog.show({
            clickOutsideToClose: true,
            templateUrl: 'app/components/channel/slot/slot.zoomIn.html',
          });
        });
      });
    },
    templateUrl: 'app/components/channel/slot/slot.html',
    controller: SlotController,
    controllerAs: 'vm',
    bindToController: true
  };

}

