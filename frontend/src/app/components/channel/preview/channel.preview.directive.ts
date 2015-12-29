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
    templateUrl: 'app/components/channel/preview/channel.preview.html'
  };

}
