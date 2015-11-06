import { ShidurService } from './shidur.service';

export class ShidurController {
  public toastr: any;
  public breakdown: { [key:string]: IUser[] };

  /* @ngInject */
  constructor (shidur: ShidurService, toastr: any) {
    this.toastr = toastr;
    this.breakdown = this.breakdownUsersByChannel(shidur.getUsers());
    this.activate();
  }

  breakdownUsersByChannel(users) {
    var breakdown = { [key:string]: IUser[] };


    users.forEach((u) => {

    });
    debugger;
  }

  /** @ngInject */
  activate() {
    console.log('activate()');
  }
}
