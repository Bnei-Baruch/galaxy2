import { IUser } from '../../auth/auth.service';
import { PubSubService } from '../../pubSub/pubSub.service';
import { SingleUserChannelController } from '../channel.singleUser.controller';

/** @ngInject */
export class ControlChannelController extends SingleUserChannelController {
  $rootScope: ng.IScope;
  pubSub: PubSubService;

  usersBreakdown: { [channel: string]: IUser[]; };
  allowRemoveUsers: boolean = true;

  selectedUser: IUser;
  searchText: string;

  constructor($injector: any) {
    super($injector);
    this.$rootScope = $injector.get('$rootScope');
    this.pubSub = $injector.get('pubSub');
    this.users = [];
  }

  pickUser(user: IUser): void {
    if (user !== undefined && this.users.indexOf(user) === -1) {
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
      this.muteRemoteUser(this.previewUser);
    }

    super.putUserToPreview(user);
  }

  trigger(): void {
    if (this.previewUser && !this.previewUser.disabled) {

      if (this.programUser) {
        this.muteRemoteUser(this.programUser);
      }

      this.putUserToProgram(this.previewUser);
    }
  }

  removeUser(user: IUser): void {
    if (user.disabled) {
      user.disabled = false;
      this.$rootScope.$broadcast('channel.userEnabled', user.login);
    }

    if (user.joined && user.audioEnabled) {
      this.muteRemoteUser(user);
    }

    // Remove user from preview if present
    if (this.previewUser === user) {
      this.putUserToPreview(null);
    }

    // Splice users
    var userIndex = this.users.indexOf(user);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }

    this.onUsersListChanged();
  }

  toggleAudio(user: IUser) {
    this.$log.debug('Toggle audio', this.name, user.login);

    user.audioEnabled = !user.audioEnabled;
    this.pubSub.client.publish('/users/' + user.login, {
      message: 'toggleAudio',
      enabled: user.audioEnabled
    });

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

  private muteRemoteUser(user: IUser): void {
    if (user.audioEnabled) {
      this.toggleAudio(user);
    }
  }

  private onUsersListChanged(): void {
    this.mapUsersByLogin();
    this.videoRoom.updateChannelUsers(this.name, this.getLoginsList());
  }

}
