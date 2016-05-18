import { PubSubService } from '../../pubSub/pubSub.service';
import { JanusVideoRoomService } from '../../janus/janusVideoRoom.service';

/* @ngInject */
export class UserContextMenuController {
  constructor(private pubSub: PubSubService,
              private videoRoom: JanusVideoRoomService,
              private toastr: any) {
  }

  reloadChannelUsers(channelName: string) {
    this.pubSub.client.publish('/admin', {
      message: 'reload',
      channel: channelName
    }).then(() => {
      this.toastr.info(`Reload command has been sent to the channel users.`);
    });
  }
}
