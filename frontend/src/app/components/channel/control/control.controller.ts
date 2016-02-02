import { SingleUserChannelController } from '../channel.single.controller';
import { IUser } from '../../../shidur/shidur.service';

/** @ngInject */
export class ControlChannelController extends SingleUserChannelController {
  users: IUser[] = [];
  usersBreakdown: { [channel: string]: IUser[]; };
  allowRemoveUsers: boolean = true;

  selectedUser: IUser;
  searchText: string;

  pickUser(user: IUser): void {
    if (user !== undefined) {
      this.users.unshift(user);

      if (user.joined) {
        this.putUserToPreview(user);
      }

      this.onUsersListChanged();
    }
  }

  putUserToPreview(user: IUser) {
    // Mute user if not on program or preview
    if (this.previewUser && this.programUser !== this.previewUser) {
      this.muteUser(this.previewUser);
    }

    super.putUserToPreview(user);
  }

  trigger(): void {
    if (this.previewUser) {

      if (this.programUser) {
        this.muteUser(this.programUser);
      }

      this.putUserToProgram(this.previewUser);
    }
  }

  removeUser(user: IUser): void {
    if (user.disabled) {
      user.disabled = false;
    }

    if (user.joined && user.audioEnabled) {
      this.muteUser(user);
    }

    // Remove user from preview if present
    if (this.previewUser === user) {
      this.putUserToPreview(null);
    }

    // Splice users
    for (var index in this.users) {
      if (this.users[index] === user) {
        this.users.splice(index, 1);
        break;
      }
    }

    this.onUsersListChanged();
  }

  toggleAudio(user: IUser) {
    user.audioEnabled = !user.audioEnabled;

    this.pubSub.client.publish('/users/' + user.login, {
      message: 'toggleAudio',
      enabled: user.audioEnabled
    });

    console.debug('toggleAudio() triggered for', user.login);
    return false;
  }

  getAllUsers() {
    var allUsers: IUser[] = [];

    for (var channel in this.usersBreakdown) {
      if (this.usersBreakdown.hasOwnProperty(channel) && channel !== 'hidden') {
        // allUsers.push.apply(allUsers, this.usersBreakdown[channel]);
        allUsers = allUsers.concat(this.usersBreakdown[channel]);
      }
    }

    return allUsers;
  }

  private muteUser(user: IUser): void {
    if (user.audioEnabled) {
      this.toggleAudio(user);
    }
  }

  private onUsersListChanged(): void {
    this.mapUsersByLogin();
    this.videoRoom.updateChannelUsers(this.name, this.getLoginsList());
  }

}
