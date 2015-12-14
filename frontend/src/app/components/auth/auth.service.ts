import IDialogService = angular.material.IDialogService;

// Implementation follows guidelines from:
// http://brewhouse.io/blog/2014/12/09/authentication-made-simple-in-single-page-angularjs-applications.html

export interface IGalaxyScope extends ng.IRootScopeService {
  currentUser?: any;
}

/** @ngInject */
export class AuthService {
  public $mdDialog: IDialogService;
  public $rootScope: IGalaxyScope;
  toastr: any;

  constructor($mdDialog: IDialogService, $rootScope: IGalaxyScope, toastr: any) {
    this.$mdDialog = $mdDialog;
    this.$rootScope = $rootScope;
    this.toastr = toastr;
  }

  public login() {
    return this.$mdDialog.show({
      clickOutsideToClose: false,
      templateUrl: 'app/components/auth/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });
  }

}
