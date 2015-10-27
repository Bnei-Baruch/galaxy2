import { IUsersBreakdown, ShidurService } from './main/main.service';

module frontend {

  angular
    .module('frontend.shidur')
    .controller('MainController', MainController)

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
}
