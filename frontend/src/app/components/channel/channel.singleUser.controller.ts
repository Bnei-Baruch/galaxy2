import { BaseChannelController } from './channel.controller';
import { IUser } from '../auth/auth.service';

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
    var user = this.usersByLogin[login];
    var nextUser = this.getNextUser(user);

    super.userLeft(login);

    if (this.programUser === user) {
      this.putUserToProgram(null);
      // TODO: Put dummy video stream to program
    }

    if (this.previewUser === user) {
      if (nextUser !== user) {
        this.putUserToPreview(nextUser);
      } else {
        this.putUserToPreview(null);
      }
    }
  }

  // TODO: Handle HTTP errors and rollback to old user in case of an error
  putUserToProgram(user: IUser) {
    if (this.programUser === user) {
      return;
    }

    var oldProgramUser = this.programUser;

    if (user === null) {
      this.$log.info('Program user is null', this.name);
      this.slotElement.program.src = null;
      // Detach media stream from program.
      attachMediaStream(this.slotElement.program, null);
      this.programUser = null;
    } else {
      this.$log.info('Putting user to program', this.name, user.login);
      this.programUser = user;
      this.forwardProgramToSDI().then(() => {
        attachMediaStream(this.slotElement.program, this.programUser.stream);
        if (oldProgramUser && oldProgramUser !== this.previewUser) {
          this.$log.info('Unsubscribe (program)', this.name, oldProgramUser.login);
          this.videoRoom.unsubscribeFromStream(oldProgramUser.login);
          oldProgramUser.stream = null;
        }
      }, () => {
        this.toastr.error(`Error putting ${user.login} to program, rolling back to ${oldProgramUser.login}`);
        this.$log.info('Rolling back program user', this.name, oldProgramUser.login);
        this.programUser = oldProgramUser;
      });

    }
  }

  // TODO: Handle HTTP errors and rollback to old user in case of an error
  putUserToPreview(user: IUser) {
    if (this.previewUser === user) {
      return;
    }

    var oldPreviewUser = this.previewUser;

    if (user === null) {
      this.$log.info('Preview user is null', this.name);

      // Unsubscribe current preview user if not in program
      if (this.previewUser !== this.programUser) {
        this.$log.info('Unsubscribe (preview)', this.name, this.previewUser.login);
        this.videoRoom.unsubscribeFromStream(this.previewUser.login);
      }
      // Detach media stream from preview.
      attachMediaStream(this.slotElement.preview, null);
      this.previewUser = null;
    } else {
      this.$log.info('Putting user to preview', this.name, user.login);
      this.previewUser = user;
      this.videoRoom.subscribeForStream(user.login).then((stream: MediaStream) => {
        user.stream = stream;
        attachMediaStream(this.slotElement.preview, stream);
        if (oldPreviewUser && oldPreviewUser !== this.programUser) {
          this.$log.info('Unsubscribe (preview)', this.name, oldPreviewUser.login);
          this.videoRoom.unsubscribeFromStream(oldPreviewUser.login);
          oldPreviewUser.stream = null;
        }
      }, () => {
        this.$log.info('Error putting user to preview', this.name, user.login);
        this.$log.info('Rolling back to old preview user', oldPreviewUser);
        this.previewUser = oldPreviewUser;
        this.toastr.error(`Error putting ${user.login} to preview`);
      });
    }
  }

  disableUser(user: IUser) {
    this.removeFromPreview(user);
    super.disableUser(user);
  }

  // Remove user from preview if present
  removeFromPreview(user: IUser) {
    if (this.previewUser === user) {
      var nextUser = this.getNextUser(user);
      // If next user is myself, remove from preview.
      if (nextUser === user) {
        nextUser = null;
      }
      this.putUserToPreview(nextUser);
    }
  }

  isReadyToSwitch() {
    if (!this.previewUser || this.videoRoom.isForwardingInProgress) {
      return false;
    }

    if (!this.previewUser.stream || this.previewUser.disabled) {
      return false;
    }
    return true;
  }

  // TODO: Handle HTTP errors and rollback to old state in case of an error
  forwardProgramToSDI() {
    // Forward program to SDI and change video title
    var sdiPorts = this.config.janus.videoRoom.sdiPorts[this.name];

    var audioPorts;
    if (sdiPorts.audio) {
      audioPorts = [sdiPorts.audio];
    } else {
      audioPorts = undefined;
    }

    return this.videoRoom.forwardRemoteFeeds([this.programUser], sdiPorts.forwardIp, [sdiPorts.video.program], audioPorts, true)
      .catch((err: string) => {
        this.$log.error('Error forwarding program to SDI', this.programUser.login, err);
        var error = `Error forwarding program to SDI ${this.programUser.login} error is ${err}`;
        this.toastr.error(error);
        return error;
      });
  }

  getNextUser(user: IUser) {
    var onlineUsers = this.getOnlineUsers();
    var userIndex = onlineUsers.indexOf(user);

    if (!onlineUsers.length) {
      return null;
    }

    return onlineUsers[(userIndex + 1) % onlineUsers.length];
  }

  fixTitles() {
    if (this.programUser) {
    return this.videoRoom.changeRemoteFeedTitle(
      this.programUser.title,
      this.config.janus.videoRoom.sdiPorts[this.name].video.program);
    }
  }
}
