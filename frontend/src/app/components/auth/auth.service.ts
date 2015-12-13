import IDialogService = angular.material.IDialogService;

// Implementation follows guidelines from:
// http://brewhouse.io/blog/2014/12/09/authentication-made-simple-in-single-page-angularjs-applications.html

/** @ngInject */
export class AuthService {
  public mdDialog: IDialogService;
  public rootScope: ng.IRootScopeService;

  constructor($mdDialog: IDialogService, $rootScope: ng.IRootScopeService) {
    this.mdDialog = $mdDialog;
    this.rootScope = $rootScope;
  }

  /** @ngInject */
  static authFactory($mdDialog: IDialogService, $rootScope: ng.IRootScopeService){
    return new AuthService($mdDialog, $rootScope);
  }

  public login() {
    return this.mdDialog.show({
      clickOutsideToClose: true,
      templateUrl: 'app/components/auth/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });
  }

}
