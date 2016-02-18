import { IUser } from '../auth/auth.service';

/** @ngInject */
export class LoginController {
  login: string;
  password: string;
  $log: ng.ILogService;

  constructor(private $scope: ng.IScope,
      private $mdDialog: angular.material.IDialogService,
      private $auth: any,
      private toastr: any) {
  }

  submit(login: string, password: string) {
    console.debug('Signing in as:', this.login);

    this.$auth.submitLogin({
      login: this.login,
      password: this.password
    }).then((user: IUser) => {
      this.$mdDialog.hide(user);
    }).catch((response: any) => {
      this.toastr.error(response.errors.join(' '));
    });
  }

}
