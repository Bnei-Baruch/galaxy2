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
    link: (scope: ng.IScope, slotEl: ng.IAugmentedJQuery) => {
      var sourceMedia = <HTMLMediaElement>slotEl.find('video').get(0);

      var cloneSourceVideo = (scope: ng.IScope, dialogEl: ng.IAugmentedJQuery) => {
        var targetMedia = <HTMLMediaElement>dialogEl.find('video').get(0);
        targetMedia.src = sourceMedia.src;
      };

      var stopTargetVideo = (scope: ng.IScope, dialogEl: ng.IAugmentedJQuery) => {
        var targetMedia = <HTMLMediaElement>dialogEl.find('video').get(0);
        targetMedia.src = null;
      };

      slotEl.bind('contextmenu', (e: any) => {
        scope.$apply(() => {
          e.preventDefault();

          if (!sourceMedia.paused && !sourceMedia.ended) {
            $mdDialog.show(<any>{
              clickOutsideToClose: true,
              templateUrl: 'app/components/channel/slot/slot.zoomIn.html',
              onShowing: cloneSourceVideo,
              onRemoving: stopTargetVideo
            });
          }
        });
      });
    },
    templateUrl: 'app/components/channel/slot/slot.html',
    controller: SlotController,
    controllerAs: 'vm',
    bindToController: true
  };

}

