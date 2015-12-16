import IDialogService = angular.material.IDialogService;


/** @ngInject */
export class LoginController {
  login: string;
  password: string;
  $log: ng.ILogService;
  $scope: ng.IScope;
  $mdDialog: IDialogService;
  $auth: any;
  toastr: any;

  constructor($scope: ng.IScope, $mdDialog: IDialogService, $auth: any, toastr: any) {
    this.$scope = $scope;
    this.$mdDialog = $mdDialog;
    this.$auth = $auth;
    this.toastr = toastr;
  }

  submit(login: string, password: string) {
    console.debug('Signing in as:', this.login);

    this.$auth.submitLogin({
      login: this.login,
      password: this.password
    }).then((user) => {
      this.$mdDialog.hide(user);
    }).catch((response) => {
      this.toastr.error(response.errors.join(' '));
    });
  }

}
