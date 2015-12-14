import {AuthService} from "./components/auth/auth.service";

export interface IGalaxyScope extends ng.IRootScopeService {
  currentUser?: any;
}

/** @ngInject */
export function runBlock($log: ng.ILogService,
                         $rootScope: IGalaxyScope,
                         $state: ng.ui.IStateService,
                         authService: AuthService) {
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
