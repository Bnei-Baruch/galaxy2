import { IUsersBreakdown, ShidurService } from './main.service';

export class MainController {
  public toastr: any;
  public breakdown: IUsersBreakdown;

  /* @ngInject */
  constructor (shidur: ShidurService, toastr: any) {
    this.toastr = toastr;
    this.breakdown = shidur.getChannelsBreakdown();
    this.activate();
  }

  /** @ngInject */
  activate() {
  }
}
