import { IUser, ShidurService } from './shidur.service';

export class ShidurController {
  public toastr: any;
  public breakdown: { [index: string]: IUser[]; };

  /* @ngInject */
  constructor (shidur: ShidurService, toastr: any) {
    this.toastr = toastr;

    shidur.getUsers().then((users) => {
      this.initBreakdown(users);
    });
  }

  initBreakdown(users) {
    this.breakdown = {};

    users.forEach((u: IUser) => {
      var channel = u.channel || 'large1';

      if (!(channel in this.breakdown)) {
        this.breakdown[channel] = [];
      }
      this.breakdown[channel].push(u);
    });
  }
}
