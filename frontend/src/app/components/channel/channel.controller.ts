import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';
import { IUser } from '../../shidur/shidur.service';
import { ChannelService } from './channel.service';

export interface IChannelScope extends ng.IScope {
  users: IUser[];
  name: string;
  selfElement: ng.IAugmentedJQuery;
  programElement: HTMLVideoElement;
  previewElement: HTMLVideoElement;
}

/** @ngInject */
export class ChannelController {
  channel: ChannelService;

  name: string;
  users: IUser[];
  hotkey: string;

  usersByLogin: { [login: string]: IUser } = {};
  onlineUsers: IUser[] = [];
  previewUser: IUser = null;
  programUser: IUser = null;

  constructor(public $scope: IChannelScope,
              public $timeout: ng.ITimeoutService,
              public $document: any,
              public janus: JanusVideoRoomService,
              public config: any) {

    // Mapping users by login for conveniency
    this.users.forEach((user: IUser) => {
      this.usersByLogin[user.login] = user;
    });

    this.bindHotkey();

    this.janus.registerChannel({
      name: this.name,
      users: this.users.map((user: IUser) => { return user.login; }),
      // Wrapping into $timeout for syncing the UI
      joinedCallback: (login: string) => {
        $timeout(() => {
          this.userJoined(login);
        });
      },
      leftCallback: (login: string) => {
        $timeout(() => {
          this.userLeft(login);
        });
      }
    });
  }

  bindHotkey() {
    if (this.hotkey) {
      this.$document.bind('keydown', (e: KeyboardEvent) => {
        if (e.keyCode === this.hotkey.charCodeAt(0)) {
          this.$timeout(() => {
            this.next();
          });
        }
      });
    }
  }

  userJoined(login: string) {
    // TODO: The timestamp should be better taken from Janus point of view
    var user = this.usersByLogin[login];
    user.joined = moment();
    this.onlineUsers.push(user);

    console.log(this.onlineUsers);

    // Put user video on preview if first user
    if (!this.previewUser) {
      this.previewUser = this.usersByLogin[login];
      this.janus.attachRemoteHandle(login, this.$scope.previewElement);
    }
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;

    this.onlineUsers.splice(this.onlineUsers.indexOf(user), 1);
    console.debug('User left', login);

    this.janus.releaseRemoteHandle(login);

    this.next();
  }

  next() {
    if (!this.onlineUsers.length) {
      this.programUser = this.previewUser = null;
      return;
    }

    // Clone the video to program
    this.$scope.programElement.src = this.$scope.previewElement.src;

    // TODO: trigger switch from Janus here
    this.janus.forwardRemoteFeed(this.previewUser.login, this.config.janus.sdiPorts[this.name]);

    if (this.programUser) {
      this.janus.releaseRemoteHandle(this.programUser.login, this.$scope.programElement);
    }

    this.programUser = this.previewUser;

    // Pick next user for preview
    this.previewUser = this.getNextUser();

    this.janus.attachRemoteHandle(this.previewUser.login, this.$scope.previewElement);
  }

  getNextUser() {
    var userIndex = this.onlineUsers.indexOf(this.usersByLogin[this.previewUser.login]);
    var nextUser = this.onlineUsers[(userIndex + 1) % this.onlineUsers.length]
    return nextUser;
  }
}
