import { ChannelController } from '../channel.controller';
import { IUser } from '../../../shidur/shidur.service';

/** @ngInject */
export class ControlChannelController extends ChannelController {
  users: IUser[] = [];
  usersBreakdown: { [channel: string]: IUser[]; };
  searchText: string;
  selectedUser: IUser;

  pickUser(user: IUser): void {
    if (user !== undefined) {
      this.users.unshift(user);
    }
  }

  toggleAudio() {
    console.debug('toggleAudio() triggered');
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
