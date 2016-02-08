import { BaseChannelController } from './channel.controller';
import { IUser } from '../../shidur/shidur.service';

declare var attachMediaStream: any;

/** @ngInject */
export class SingleUserChannelController extends BaseChannelController {
  programUser: IUser = null;
  previewUser: IUser = null;

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

  putUserToProgram(user: IUser) {
    if (this.programUser === user) {
      return;
    }

    var oldProgramUser = this.programUser;
    this.programUser = user;

    if (user === null) {
      this.slotElement.program.src = null;
    } else {
      attachMediaStream(this.slotElement.program, this.programUser.stream);

      this.forwardProgramToSDI();

      if (oldProgramUser) {
        this.videoRoom.unsubscribeFromStream(oldProgramUser.login);
        oldProgramUser.stream = null;
        console.debug('Unsubscribed from', oldProgramUser.login);
      }
    }
  }

  putUserToPreview(user: IUser) {
    if (this.previewUser === user) {
      return;
    }

    var oldPreviewUser = this.previewUser;
    this.previewUser = user;

    if (user === null) {
      this.slotElement.preview.src = null;
    } else {
      this.videoRoom.subscribeForStream(user.login, (stream: MediaStream) => {
        user.stream = stream;
        attachMediaStream(this.slotElement.preview, stream);
        console.debug('Subscribed for', user.login);
      });

      if (oldPreviewUser && oldPreviewUser !== this.programUser) {
        this.videoRoom.unsubscribeFromStream(oldPreviewUser.login);
        oldPreviewUser.stream = null;
        console.debug('Unsubscribed from', oldPreviewUser.login);
      }
    }
  }

  disableUser(user: IUser) {
    super.disableUser(user);

    // Remove user from preview if present
    if (this.previewUser === user) {
      this.putUserToPreview(null);
    }
  }

  isReadyToSwitch() {
    if (!this.previewUser || !this.isForwarded.program) {
      return false;
    }

    if (!this.previewUser.stream) {
      return false;
    }

    return true;
  }

  forwardProgramToSDI() {
    // Forward program to SDI and change video title
    var sdiPorts = this.config.janus.sdiPorts[this.name];

    this.isForwarded.program = false;

    var audioPorts;

    if (sdiPorts.audio) {
      audioPorts = [sdiPorts.audio];
    } else {
      audioPorts = undefined;
    }

    this.videoRoom.forwardRemoteFeeds([this.programUser.login], [sdiPorts.video.program], audioPorts).then(() => {
      this.isForwarded.program = true;
      this.videoRoom.changeRemoteFeedTitle(this.programUser.title, sdiPorts.video.program);
    }, () => {
      var error = 'Failed forwarding feed to SDI';
      this.toastr.error(error);
      console.error(error);
    });
  }

  getNextUser(user: IUser) {
    var onlineUsers = this.getOnlineUsers();
    var userIndex = onlineUsers.indexOf(user);

    if (userIndex === -1) {
      return null;
    }

    var nextUser = onlineUsers[(userIndex + 1) % onlineUsers.length];
    return nextUser;
  }

}
