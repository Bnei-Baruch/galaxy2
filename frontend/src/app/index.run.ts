import { AuthService, IGalaxyScope } from './components/auth/auth.service';

/** @ngInject */
export function runBlock($log: ng.ILogService,
                         $rootScope: IGalaxyScope,
                         $state: ng.ui.IStateService,
                         toastr: any,
                         $auth: any,
                         authService: AuthService) {

  authService.authenticate()
    .then(function (user) {
      $rootScope.currentUser = user;

      $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;

        if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
          event.preventDefault();
        }

        $state.go(toState.name, toParams);
      });

    });
  $log.debug('runBlock end');
}
