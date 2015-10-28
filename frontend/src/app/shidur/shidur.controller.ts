import { IUsersBreakdown, ShidurService } from './shidur.service';

export class ShidurController {
  public toastr: any;
  public breakdown: IUsersBreakdown;

  /* @ngInject */
  constructor (shidur: ShidurService, toastr: any) {
    this.toastr = toastr;
    this.breakdown = shidur.getUsersBreakdown();
    this.activate();
  }

  /** @ngInject */
  activate() {
    console.log('activate()');
  }
}
