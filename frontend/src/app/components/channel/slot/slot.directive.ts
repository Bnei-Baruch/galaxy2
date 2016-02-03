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
    templateUrl: 'app/components/channel/slot/slot.html'
  };

}

