import { JanusVideoRoomService } from '../janus/janusVideoRoom.service';
import { IUser } from '../auth/auth.service';

/** @ngInject */
export class BaseChannelController {
  name: string;
  hotkey: string;
  users: IUser[];

  usersByLogin: { [login: string]: IUser } = {};

  slotElement: { program: HTMLMediaElement, preview: HTMLMediaElement } = {
    program: null,
    preview: null
  };

  $log: ng.ILogService;
  $timeout: ng.ITimeoutService;
  $document: any;
  videoRoom: JanusVideoRoomService;
  toastr: any;
  config: any;
  cssUserListHeightCalc: number;
  $http: ng.IHttpService;

  // Using $injector manually to allow easier constructor overloads
  constructor($injector: any) {
    this.$log = $injector.get('$log');
    this.$document = $injector.get('$document');
    this.$timeout = $injector.get('$timeout');
    this.videoRoom = $injector.get('videoRoom');
    this.toastr = $injector.get('toastr');
    this.config = $injector.get('config');
    this.$http = $injector.get('$http');

    // Mapping users by login for convenience
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

    this.$timeout(() => {
      this.setUserListHeight(element);
    }, 0, false);

    // Set users list height

    this.bindHotkey();
  }

  setUserListHeight(element: ng.IAugmentedJQuery) {
    var userListEl = element.find('[data-id = channelVideoBlock]');
    var parentHeight = userListEl.parent('.channel').height();
    var usersHeight = parentHeight - parseInt(userListEl.eq(0).height().toString(), 10) - 20;

    // Correction for search block in control
    if (this.name === 'control') {
      usersHeight -= 40;
    }

    this.cssUserListHeightCalc = usersHeight;
  }

  userJoined(login: string) {
    this.$log.info('User joined', this.name, login);
    var user = this.usersByLogin[login];

    // TODO: The timestamp should be better taken from Janus point of view
    user.joined = moment();
    user.disabled = false;
  }

  userLeft(login: string) {
    this.$log.info('User left', this.name, login);
    var user = this.usersByLogin[login];
    user.joined = null;
    user.stream = null;
  }

  trigger() {
    this.$log.error('trigger() not implemented!', this.name);
  }

  disableUser(user: IUser) {
    this.$log.info('Disable user', this.name, user.login);
    user.disabled = true;
  }

  mapUsersByLogin() {
    if (typeof this.users === 'undefined') {
      this.users = [];
    }

    // Mapping users by login for convenience
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

  onUserDrop(channelId: string, user: IUser, users: Array<IUser>) {
    users.push(user);
    if (channelId === 'control') {
      return;
    }

    this.$http.put(this.config.backendUri + '/rest/users/' + user.id, {channel: channelId})
      .then((r: any) => {
        //
      }, (e: any) => {
        // error
      });
  }

  onUserDropSuccess(login: string, users: Array<IUser>) {
    users.some((user: IUser, index: number) => {
      if (user.login === login) {
        users.splice(index, 1);
        return true;
      }
      return false;
    });
  }
}
