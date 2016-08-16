import { PubSubService } from '../../pubSub/pubSub.service';
import {IUser} from '../../auth/auth.service';
import { ChatService } from '../../chat/chat.service';

/* @ngInject */
export class UserContextMenuController {
  constructor(private pubSub: PubSubService,
              private chat: ChatService,
              private $log: ng.ILogService,
              private toastr: any) {
  }

  reloadChannelUsers(channelName: string) {
    this.$log.debug('Reload channel', channelName);
    this.pubSub.client.publish('/admin', {
      message: 'reload',
      channel: channelName
    }).then(() => {
      this.toastr.info(`Reloading users in ${channelName} channel`);
    }, (error: any) => {
      this.$log.error('Error reloading channel users', channelName, error);
      this.toastr.error(`Error reloading users in ${channelName} channel`);
    });
  }

  reloadUser(user: IUser) {
    this.$log.debug('Reload user', user.login);
    this.pubSub.client.publish('/users/' + user.login, {
      message: 'reload'
    }).then(() => {
      this.toastr.info(`Reloading ${user.title}`);
    }, (error: any) => {
      this.$log.error('Error reloading user', user.login, error);
      this.toastr.error(`Error reloading ${user.title}`);
    });
  }
}
