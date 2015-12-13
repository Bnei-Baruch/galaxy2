

/** @ngInject */
export class LoginController {
  public login:String;
  public password:String;
  public log: ng.ILogService;

  constructor($log:ng.ILogService) {
    this.log = $log;
  }

  submit() {
    this.log.debug('Signing in as: ' + this.login);
  }

}
