/** @ngInject */
export function channelUsersWidget(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      programUser: '=',
      previewUser: '=',
      users: '='
    },
    templateUrl: 'app/components/channel/users/channel.users.html'
  };

}
