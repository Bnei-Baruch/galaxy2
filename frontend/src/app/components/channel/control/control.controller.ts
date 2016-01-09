import { BaseChannelController } from '../channel.controller';
import { IUser } from '../../../shidur/shidur.service';

/** @ngInject */
export class ControlChannelController extends BaseChannelController {
  users: IUser[] = [];
  usersBreakdown: { [channel: string]: IUser[]; };

  selectedUser: IUser;
  searchText: string;

  pickUser(user: IUser): void {
    if (user !== undefined) {
      this.users.unshift(user);
      if (user.joined) {
        this.putUserToPreview(user);
      }
    }
  }

  trigger(): void {
    if (this.previewUser) {
      this.putUserToProgram(this.previewUser);
    }
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
