import { IUser } from '../auth/auth.service';

/** @ngInject */
export class LoginController {
  login: string;
  password: string;

  constructor(private $log: ng.ILogService,
              private $mdDialog: angular.material.IDialogService,
              private $auth: any,
              private toastr: any) {
  }

  submit() {
    this.$log.debug('Signing in as: ', this.login);

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
