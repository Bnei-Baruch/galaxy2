import { AuthService, IUser, IGalaxyScope } from './components/auth/auth.service';

/** @ngInject */
export function runBlock($log: ng.ILogService,
                         $rootScope: IGalaxyScope,
                         $state: ng.ui.IStateService,
                         authService: AuthService) {

  // TODO: support pages that don't require login

  authService.authenticate()
    .then(function (user: IUser) {
      $rootScope.currentUser = user;

      $rootScope.$on('$stateChangeStart', function (e: any, to: angular.ui.IState) {
        if (to.data.requireLogin && !authService.can(to.data.minRole)) {
          e.preventDefault();
          $state.go('user', null, {notify: false});
        }
      });

      if (!$state.current.name) {
        $state.go(authService.can('operator') ? 'shidur' : 'user');
      }
    });

  $log.debug('runBlock end');
}
