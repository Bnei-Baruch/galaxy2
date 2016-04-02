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

  constructor(private $rootScope: IGalaxyScope,
      private authService: AuthService,
      private $mdSidenav: angular.material.ISidenavService,
      private toastr: any) {
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
