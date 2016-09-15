import { SingleUserChannelController } from '../channel.singleUser.controller';
import {IDraggedData} from '../channel.controller';
import {IUser} from '../../auth/auth.service';

/** @ngInject */
export class LargeChannelController extends SingleUserChannelController {
  trigger() {
    if (this.isReadyToSwitch()) {
      this.putUserToProgram(this.previewUser);
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
      if (data.channelToId === 'control') {
        this.disableUser(user);
      } else {
        this.removeFromPreview(user);
        this.users.splice(index, 1);
      }
    });
    super.onDragUserFrom(data);
  }
}
