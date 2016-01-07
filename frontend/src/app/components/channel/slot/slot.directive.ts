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
      trigger: '&'
    },
    templateUrl: 'app/components/channel/slot/slot.html',
    controller: SlotController,
    controllerAs: 'vm',
    bindToController: true
  };

}

