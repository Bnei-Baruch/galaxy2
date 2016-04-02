import { IUser } from '../components/auth/auth.service';
import { ShidurService } from './shidur.service';

export class ShidurController {
  $mdSidenav: angular.material.ISidenavService;
  toastr: any;
  breakdown: { [index: string]: IUser[] };
  cssUserListHeightCalc: number;
  $timeout: ng.ITimeoutService;
  $injector: any;

  /* @ngInject */
  constructor($mdSidenav: angular.material.ISidenavService, shidur: ShidurService, toastr: any, $injector: any) {
    this.$mdSidenav = $mdSidenav;
    this.toastr = toastr;
    this.$timeout = $injector.get('$timeout');

    shidur.getUsers().then((users: IUser[]) => {
      this.initBreakdown(users);
    });
  }

  initBreakdown(users: IUser[]) {
    this.breakdown = {};

    users.forEach((u: IUser) => {
      var channel = u.channel || 'large1';

      if (!(channel in this.breakdown)) {
        this.breakdown[channel] = [];
      }
      this.breakdown[channel].push(u);
    });
  }

  toggleChat() {
    this.$mdSidenav('chat').toggle();
  }

  closeChat() {
    this.$mdSidenav('chat').close();
  }


}
