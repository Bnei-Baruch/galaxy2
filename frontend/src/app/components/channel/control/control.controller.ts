import { BaseChannelController } from '../channel.controller';
import { IUser } from '../../../shidur/shidur.service';

/** @ngInject */
export class ControlChannelController extends BaseChannelController {
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

  trigger(): void {
    if (this.previewUser) {
      this.putUserToProgram(this.previewUser);
    }
  }

  removeUser(user: IUser): void {
    // TODO: Mute sound if the user is online
    if (user.joined && user.audioEnabled) {
    }

    // Remove user from slots if present
    if (this.previewUser === user) {
      this.putUserToPreview(null);
    }

    if (this.programUser === user) {
      this.putUserToProgram(null);
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

  onUsersListChanged() {
    this.mapUsersByLogin();
    this.janus.updateChannelUsers(this.name, this.getLoginsList());
  }

  querySearch(searchText: string): IUser[] {
    var users = [];
    console.log('query search', searchText);

    searchText = searchText || '';
    var lowercaseText = searchText.trim().toLowerCase();

    var pickedLogins = this.users.map((user: IUser) => { return user.login; });

    for (var channel in this.usersBreakdown) {
      if (this.usersBreakdown.hasOwnProperty(channel) && channel !== 'hidden') {
        var channelUsers = this.usersBreakdown[channel].filter((user: IUser) => {
          if (pickedLogins.indexOf(user.login) !== -1) {
            return false;
          }
          var titleLogin = (user.login + user.title).toLowerCase();
          return titleLogin.indexOf(lowercaseText) !== -1;
        });
        users = users.concat(channelUsers);
      }
    }

    return users;
  }
}
