/** @ngInject */
export class SlotController {

  constructor(private $mdDialog: angular.material.IDialogService) {
  }

  onLink(scope: ng.IScope, element: ng.IAugmentedJQuery) {
    var sourceMedia = <HTMLMediaElement>element.find('video').get(0);

    var cloneSourceVideo = (scope: ng.IScope, dialogEl: ng.IAugmentedJQuery) => {
      var targetMedia = <HTMLMediaElement>dialogEl.find('video').get(0);
      targetMedia.src = sourceMedia.src;
    };

    var stopTargetVideo = (scope: ng.IScope, dialogEl: ng.IAugmentedJQuery) => {
      var targetMedia = <HTMLMediaElement>dialogEl.find('video').get(0);
      targetMedia.src = null;
    };

    element.bind('contextmenu', (e: any) => {
      scope.$apply(() => {
        e.preventDefault();

        if (!sourceMedia.paused && !sourceMedia.ended) {
          this.$mdDialog.show(<any>{
            clickOutsideToClose: true,
            templateUrl: 'app/components/channel/slot/slot.zoomIn.html',
            onShowing: cloneSourceVideo,
            onRemoving: stopTargetVideo
          });
        }
      });
    });
  }
}
