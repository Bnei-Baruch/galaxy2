import { PubSubService } from '../components/pubSub/pubSub.service';

export class AdminController {

  /* @ngInject */
  constructor (private pubSub: PubSubService, private toastr: any) {
  }

  reloadAllUsers() {
    this.pubSub.client.publish('/admin', {
      message: 'reload'
    }).then(() => {
      this.toastr.info('Reloading all users');
    }, (error: any) => {
      this.toastr.error('Error reloading all users');
    });

  }
}

