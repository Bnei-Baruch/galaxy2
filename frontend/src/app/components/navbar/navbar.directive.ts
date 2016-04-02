import { AuthService } from '../auth/auth.service';

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

  constructor(private authService: AuthService,
              private $mdSidenav: angular.material.ISidenavService) {
  }

  openHeader() {
    this.$mdSidenav('headerNav').open();
  }

  closeHeader() {
    this.$mdSidenav('headerNav').close();
  }

  openMenu($mdOpenMenu: any, e: ng.IAngularEvent) {
    $mdOpenMenu(e);
  };

  logout() {
    this.authService.logout().then(() => {
      window.location.reload();
    });
  }
}
