import { IUser } from '../../auth/auth.service';
import { PubSubService } from '../../pubSub/pubSub.service';
import { SingleUserChannelController } from '../channel.singleUser.controller';
import { IDraggedData } from '../channel.controller';

/** @ngInject */
export class ControlChannelController extends SingleUserChannelController {
  pubSub: PubSubService;

  usersBreakdown: { [channel: string]: IUser[]; };
  allowRemoveUsers: boolean = true;

  selectedUser: IUser;
  searchText: string;

  constructor($injector: any) {
    super($injector);
    this.pubSub = $injector.get('pubSub');
    this.users = [];
  }

  pickUser(user: IUser): void {
    if (user !== undefined && !this.usersByLogin[user.login]) {
      this.users.unshift(user);

      if (user.joined) {
        this.putUserToPreview(user);
      }

      this.onUsersListChanged();
    }
  }

  putUserToPreview(user: IUser): ng.IPromise<{}> {
    // Mute user if not on program or preview
    if (this.previewUser && this.programUser !== this.previewUser) {
      this.toggleAudio(this.previewUser, false);
    }
    return super.putUserToPreview(user);
  }

  trigger(): void {
    if (this.isReadyToSwitch()) {
      if (this.programUser) {
        this.toggleAudio(this.programUser, false);
      }
      // if (this.previewUser) {
      //   this.toggleAudio(this.previewUser, false);
      // }
      this.putUserToProgram(this.previewUser).then(() => {
        this.toggleAudio(this.programUser, true);
      });
    }
  }

  removeUser(user: IUser): void {
    if (user.disabled) {
      user.disabled = false;
      this.$rootScope.$broadcast('channel.userEnabled', user.login);
    }

    if (user.joined && user.audioEnabled) {
      this.toggleAudio(user, false);
    }

    // Remove user from preview if present
    if (this.previewUser === user) {
      this.putUserToPreview(this.getNextUser(user));
    }

    // Splice users
    var userIndex = this.users.indexOf(user);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      delete this.usersByLogin[user.login];
    }

    this.onUsersListChanged();
  }

  toggleAudio(user: IUser, enabled: boolean) {
    if (enabled === undefined) {
      enabled = !user.audioEnabled;
    }
    user.audioEnabled = enabled;
    this.$log.debug('Toggle audio:', this.name, user.login, user.audioEnabled);

    this.pubSub.client.publish('/users/' + user.login, {
      message: 'toggleAudio',
      enabled: user.audioEnabled
    }).then(() => {
      this.$log.debug('Audio toggled:', user.login, user.audioEnabled);
    }, (error: any) => {
      this.$log.error('Error sending toggle audio command for', user.login, error);
      this.toastr.error('Unable to toggle audio, error response recorded');
    });

    return false;
  }

  getAllUsers() {
    var allUsers: IUser[] = [];

    for (var channel in this.usersBreakdown) {
      if (this.usersBreakdown.hasOwnProperty(channel) && channel !== 'hidden') {
        allUsers = allUsers.concat(this.usersBreakdown[channel]);
      }
    }

    return allUsers;
  }

  onDragUserTo(data: IDraggedData) {

    if (data.isDropToSearch) {
      if (!!this.usersByLogin[data.user.login]) {
        return;
      }
      this.selectedUser = data.user;
    }
  }

  onDragUserFrom(data: IDraggedData) {
    /*This not abstract method. Overload default method for doing nothing*/
  }

  private onUsersListChanged(): void {
    this.mapUsersByLogin();
    this.videoRoom.updateChannelUsers(this.name, this.getLoginsList());
  }
}
