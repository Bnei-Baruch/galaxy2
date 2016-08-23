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

  onDragUserFrom(data: IDraggedData) {
    if (data.destinationType === 'search') {
      return;
    }
    this.users.some((user: IUser, index: any) => {
      if (user.login !== data.user.login) {
        return false;
      }
      if (data.destinationType === 'disable') {
        this.disableUser(user);
      } else {
        this.users.splice(index, 1);
      }
      return true;
    });
    this.usersByLogin = {};
    this.mapUsersByLogin();
  }
}
