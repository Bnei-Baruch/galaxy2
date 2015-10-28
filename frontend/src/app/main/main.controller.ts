import { IUsersBreakdown, ShidurService } from './main.service';

export class MainController {
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
  }
}
