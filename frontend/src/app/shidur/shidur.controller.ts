import { IUser, ShidurService } from './shidur.service';

export class ShidurController {
  public toastr: any;
  public breakdown: { [index: string]: IUser[]; };

  /* @ngInject */
  constructor (shidur: ShidurService, toastr: any) {
    this.toastr = toastr;
    this.breakdown = {};

    this.initBreakdown(shidur.getUsers().users);
  }

  initBreakdown(users) {
    users.forEach((u: IUser) => {
      if (!(u.channel in this.breakdown)) {
        this.breakdown[u.channel] = [];
      }
      this.breakdown[u.channel].push(u);
    });
  }
}
