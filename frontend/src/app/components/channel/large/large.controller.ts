import { SingleUserChannelController } from '../channel.singleUser.controller';

/** @ngInject */
export class LargeChannelController extends SingleUserChannelController {
  trigger() {
    if (this.isReadyToSwitch()) {
      this.putUserToProgram(this.previewUser);
      var nextUser = this.getNextUser(this.previewUser);
      this.putUserToPreview(nextUser);
    }
  }

}
