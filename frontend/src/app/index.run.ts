import {AuthService, IGalaxyScope} from "./components/auth/auth.service";

/** @ngInject */
export function runBlock($log: ng.ILogService,
                         $rootScope: IGalaxyScope,
                         $state: ng.ui.IStateService,
                         toastr: any,
                         authService: AuthService) {
  $log.debug('runBlock end');
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();

      authService.login()
        .then(function (user) {
          $rootScope.currentUser = user;
          return $state.go(toState.name, toParams);
        });
    }
  });
}
