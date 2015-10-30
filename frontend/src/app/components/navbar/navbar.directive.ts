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
}
