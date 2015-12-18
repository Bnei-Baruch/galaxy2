import { AuthService, IGalaxyScope } from './components/auth/auth.service';

/** @ngInject */
export function runBlock($log:ng.ILogService,
                         $rootScope:IGalaxyScope,
                         $state:ng.ui.IStateService,
                         toastr:any,
                         $auth:any,
                         authService:AuthService) {

  authService.authenticate()
    .then(function (user) {
      $rootScope.currentUser = user;
      $state.go(authService.can('operator') ? 'shidur' : 'user');
    });

  $rootScope.$on('$stateChangeStart', function (e, to) {
    if ((to.data.requireLogin && !$rootScope.currentUser) || !authService.can(to.data.minRole)) {
      e.preventDefault();
      $state.go('user', null, {notify: false});
    }
  });

  $log.debug('runBlock end');
}
