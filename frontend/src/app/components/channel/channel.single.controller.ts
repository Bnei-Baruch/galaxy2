import { BaseChannelController } from './channel.controller';

/** @ngInject */
export class SingleUserChannelController extends BaseChannelController {
  userJoined(login: string) {
    super.userJoined(login);

    // Put user video on preview if first user
    if (this.previewUser === null) {
      var user = this.usersByLogin[login];
      this.putUserToPreview(user);
    }
  }

  userLeft(login: string) {
    super.userLeft(login);

    var user = this.usersByLogin[login];

    if (this.programUser === user) {
      this.putUserToProgram(null);
      // TODO: Put dummy video stream to program
    }

    if (this.previewUser === user) {
      var previewUser = this.getNextUser(user);
      this.putUserToPreview(previewUser);
    }
  }
}
