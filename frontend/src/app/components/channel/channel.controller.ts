import { JanusVideoRoomService } from '../janus/janusVideoRoom.service';
import { IUser } from '../../shidur/shidur.service';

/** @ngInject */
export class BaseChannelController {
  name: string;
  hotkey: string;
  users: IUser[];

  usersByLogin: { [login: string]: IUser } = {};

  isForwarded: { program: boolean, preview: boolean } = {
    program: true,
    preview: false
  };

  slotElement: { program: HTMLMediaElement, preview: HTMLMediaElement } = {
    program: null,
    preview: null
  };

  $timeout: ng.ITimeoutService;
  $document: any;
  videoRoom: JanusVideoRoomService;
  toastr: any;
  config: any;

  // Using $injector manually to allow easier constructor overloads
  constructor($injector: any) {
    this.$document = $injector.get('$document');
    this.$timeout = $injector.get('$timeout');
    this.videoRoom = $injector.get('videoRoom');
    this.toastr = $injector.get('toastr');
    this.config = $injector.get('config');

    // Mapping users by login for conveniency
    this.mapUsersByLogin();

    this.videoRoom.registerChannel({
      name: this.name,
      users: this.getLoginsList(),
      joinedCallback: (login: string) => {
        this.userJoined(login);
      },
      leftCallback: (login: string) => {
        this.userLeft(login);
      }
    });
  }

  onLink(scope: ng.IScope, element: ng.IAugmentedJQuery) {
    // Can't use classes to find elements because ng-class is not ready yet
    var mediaElements = element.find('video');
    this.slotElement.program = <HTMLMediaElement>mediaElements.get(0);
    this.slotElement.preview = <HTMLMediaElement>mediaElements.get(1);
  }

  userJoined(login: string) {
    // TODO: The timestamp should be better taken from Janus point of view
    var user = this.usersByLogin[login];
    user.joined = moment();
    user.disabled = false;
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;
    user.stream = null;

    console.log('User left', login);
  }

  trigger() {
    console.error('trigger() not implemented!');
  }

  disableUser(user: IUser) {
    user.disabled = true;
  }

  mapUsersByLogin() {
    if (typeof this.users === 'undefined') {
      this.users = [];
    }

    // Mapping users by login for conveniency
    this.users.forEach((user: IUser) => {
      this.usersByLogin[user.login] = user;
    });
  }

  bindHotkey() {
    if (this.hotkey) {
      this.$document.bind('keydown', (e: KeyboardEvent) => {
        if (e.keyCode === this.hotkey.charCodeAt(0)) {
          this.$timeout(() => {
            this.trigger();
          });
        }
      });
    }
  }

  getLoginsList() {
    return this.users.map((user: IUser) => { return user.login; });
  }

  getOnlineUsers() {
    var onlineUsers: IUser[] = [];

    this.users.forEach((user: IUser) => {
      if (user.joined && !user.disabled) {
        onlineUsers.push(user);
      }
    });

    onlineUsers.sort((user1: IUser, user2: IUser) => {
      return user1.joined > user2.joined ? 1 : -1;
    });

    return onlineUsers;
  }
}
