/** @ngInject */
export function channelProgramWidget(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'app/components/channel/program/channel.program.html'
  };

}
