import { PubSubService } from '../components/pubSub/pubSub.service';

export class AdminController {

  /* @ngInject */
  constructor (private pubSub: PubSubService, private toastr: any) {
  }

  reloadAllUsers() {
    this.pubSub.client.publish('/admin', {
      message: 'reload'
    });

    this.toastr.info('Reload command has been sent to all users');
  }
}

