/** @ngInject */
export function channelPreviewWidget(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      user: '=',
      ready: '&',
      trigger: '&',
      toggleAudio: '&'
    },
    templateUrl: 'app/components/channel/preview/channel.preview.html',
    controller: ChannelPreviewController,
    controllerAs: 'preview',
    bindToController: true
  };
}

/** @ngInject */
export class ChannelPreviewController {
  toggleAudio: (audioEnabled: boolean) => void;
  audioEnabled: boolean = false;

  triggerToggleAudio() {
    if (this.toggleAudio) {
      this.audioEnabled = !this.audioEnabled;
      this.toggleAudio(this.audioEnabled);
    }
  }
}
