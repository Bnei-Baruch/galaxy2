import {AuthService} from "./components/auth/auth.service";

/** @ngInject */
export function runBlock($log:ng.ILogService,
                         $rootScope:ng.IRootScopeService,
                         $state:ng.ui.IStateService,
                         authService:AuthService) {
  $log.debug('runBlock end');

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();

      authService.login()
        .then(function () {
          return $state.go(toState.name, toParams);
        })
        .catch(function () {
          return $state.go('hell');   // TODO: replace this with a user friendly something...
        });
    }
  });
}
