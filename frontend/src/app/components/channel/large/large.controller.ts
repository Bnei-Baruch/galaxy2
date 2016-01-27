import { SingleUserChannelController } from '../channel.single.controller';

/** @ngInject */
export class LargeChannelController extends SingleUserChannelController {
  next() {
    if (this.isReadyToSwitch()) {
      this.putUserToProgram(this.previewUser);
      var nextUser = this.getNextUser(this.previewUser);
      this.putUserToPreview(nextUser);
    }
  }

}
