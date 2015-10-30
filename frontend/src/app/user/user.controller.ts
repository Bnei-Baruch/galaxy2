export class UserController {
  public toastr: any;

  /* @ngInject */
  constructor (toastr: any) {
    this.toastr = toastr;
    this.activate();
  }

  /** @ngInject */
  activate() {
    console.log('activate()');
  }
}

