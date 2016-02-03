import { BaseChannelController } from '../channel.controller';

/** @ngInject */
export class LargeChannelController extends BaseChannelController {
  trigger() {
    if (this.isReadyToSwitch()) {
      this.putUserToProgram(this.previewUser);
      var nextUser = this.getNextUser(this.previewUser);
      this.putUserToPreview(nextUser);
    }
  }

}
