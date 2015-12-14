import IDialogService = angular.material.IDialogService;


/** @ngInject */
export class LoginController {
  public login: string;
  public password: string;
  public $log: ng.ILogService;
  public $scope: ng.IScope;
  public $mdDialog: IDialogService;
  public $auth: any;

  constructor($log: ng.ILogService, $scope: ng.IScope, $mdDialog: IDialogService, $auth: any) {
    this.$log = $log;
    this.$scope = $scope;
    this.$mdDialog = $mdDialog;
    this.$auth = $auth;
  }

  submit(login: string, password: string) {
    this.$log.debug('Signing in as: ' + this.login);

    this.$auth.submitLogin({
      login: this.login,
      password: this.password
    }).then((resp) => {
      console.log(resp);
      debugger;
      this.$mdDialog.hide({});
    });
  }

}
