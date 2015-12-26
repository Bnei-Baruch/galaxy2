import { AuthService, IGalaxyScope } from '../auth/auth.service';

/** @ngInject */
export function galaxyNavbar(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

}

/** @ngInject */
export class NavbarController {
  $rootScope: IGalaxyScope;
  auth: AuthService;
  toastr: any;

  constructor ($rootScope: IGalaxyScope, authService: AuthService, toastr: any) {
    this.$rootScope = $rootScope;
    this.auth = authService;
    this.toastr = toastr;
  }

  openMenu($mdOpenMenu, e) {
    $mdOpenMenu(e);
  };

  logout() {
    this.auth.logout().then(() => {
      window.location.reload();
    });
  }
}
