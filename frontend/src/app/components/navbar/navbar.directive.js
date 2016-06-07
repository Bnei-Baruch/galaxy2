/** @ngInject */
function galaxyNavbar() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/components/navbar/navbar.html',
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
    };
}
exports.galaxyNavbar = galaxyNavbar;
/** @ngInject */
var NavbarController = (function () {
    function NavbarController(authService, $mdSidenav) {
        this.authService = authService;
        this.$mdSidenav = $mdSidenav;
    }
    NavbarController.prototype.openHeader = function () {
        this.$mdSidenav('headerNav').open();
    };
    NavbarController.prototype.closeHeader = function () {
        this.$mdSidenav('headerNav').close();
    };
    NavbarController.prototype.openMenu = function ($mdOpenMenu, e) {
        $mdOpenMenu(e);
    };
    ;
    NavbarController.prototype.logout = function () {
        this.authService.logout().then(function () {
            window.location.reload();
        });
    };
    return NavbarController;
})();
exports.NavbarController = NavbarController;
