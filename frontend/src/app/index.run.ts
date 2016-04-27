import { AuthService, IUser, IGalaxyScope } from './components/auth/auth.service';

/** @ngInject */
export function runBlock($log: ng.ILogService,
                         $rootScope: IGalaxyScope,
                         $state: ng.ui.IStateService,
                         authService: AuthService) {

  // TODO: support pages that don't require login

  var authenticated = authService.authenticate()
    .then((user: IUser) => {
      $rootScope.currentUser = user;

      if (!$state.current.name) {
        $state.go(authService.can('operator') ? 'shidur' : 'user');
      }
    });

  $rootScope.$on('$stateChangeStart', (e: any, to: angular.ui.IState) => {
    authenticated.then(() => {
      if (to.data.requireLogin && !authService.can(to.data.minRole)) {
        e.preventDefault();
        $state.go('user');
        // $state.go('user', null, {notify: false});
      }
    });
  });

  $log.debug('runBlock end');
}
