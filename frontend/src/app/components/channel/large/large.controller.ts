import { BaseChannelController } from '../channel.controller';
import { IUser } from '../../../shidur/shidur.service';

/** @ngInject */
export class LargeChannelController extends BaseChannelController {
  onlineUsers: IUser[] = [];

  userJoined(login: string) {
    // TODO: The timestamp should be better taken from Janus point of view
    var user = this.usersByLogin[login];
    user.joined = moment();
    this.onlineUsers.push(user);

    // Put user video on preview if first user
    if (this.previewUser === null) {
      this.putUserToPreview(user);
    }
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;
    user.stream = null;

    this.onlineUsers.splice(this.onlineUsers.indexOf(user), 1);
    console.log('User left', login);

    if (this.programUser === user) {
      this.putUserToProgram(null);
      // TODO: Put dummy video stream to program
    }

    if (this.previewUser === user) {
      var previewUser = this.getNextUser(user);
      this.putUserToPreview(previewUser);
    }
  }


  next() {
    if (this.isReadyToSwitch()) {
      this.putUserToProgram(this.previewUser);
      var nextUser = this.getNextUser(this.previewUser);
      this.putUserToPreview(nextUser);
    }
  }

  getNextUser(user: IUser) {
    var userIndex = this.onlineUsers.indexOf(user);

    if (userIndex === -1) {
      return null;
    }

    var nextUser = this.onlineUsers[(userIndex + 1) % this.onlineUsers.length];
    return nextUser;
  }

}
