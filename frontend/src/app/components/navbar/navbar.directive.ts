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
  $mdSidenav: angular.material.ISidenavService;

  constructor($rootScope: IGalaxyScope, authService: AuthService, $mdSidenav: angular.material.ISidenavService, toastr: any) {
    this.$rootScope = $rootScope;
    this.auth = authService;
    this.toastr = toastr;
    this.$mdSidenav = $mdSidenav;
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
