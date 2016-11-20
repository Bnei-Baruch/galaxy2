import { SingleUserChannelController } from '../channel.singleUser.controller';
import { IDraggedData } from '../channel.controller';
import { IUser } from '../../auth/auth.service';

/** @ngInject */
export class LargeChannelController extends SingleUserChannelController {

  trigger() {
    console.log('Large trigger', this.name, this.config.janus.videoRoom.sdiPorts[this.name]);
    if (this.isReadyToSwitch()) {
      var ports = this.config.janus.videoRoom.sdiPorts[this.name];
      if (ports && ports.audio && this.programUser) {
        this.toggleAudio(this.programUser, false);
      }
      this.putUserToProgram(this.previewUser);
      this.putUserToProgram(this.previewUser).then(() => {
        if (ports && ports.audio) {
          this.toggleAudio(this.programUser, true);
        }
      });
      var nextUser = this.getNextUser(this.previewUser);
      this.putUserToPreview(nextUser);
    }
  }

  // when user drug from this channel disable or remove from users
  onDragUserFrom(data: IDraggedData) {
    this.users.forEach((user: IUser, index: any) => {
      if (user.login !== data.user.login) {
        return false;
      }
      if (data.channelToId !== 'control') {
        this.removeFromPreview(user);
      } else if (!data.isDropToSearch) {
        this.disableUser(user);
      }
    });
    super.onDragUserFrom(data);
  }
}
