import { JanusVideoRoomService } from '../janus/janusVideoRoom.service';
import { PublisherStatusTrackerService, InternetConnectionType } from '../janus/publisherStatusTracker.service';
import { IUser } from '../auth/auth.service';


export interface IDraggedData {
  user: IUser;
  channelFromId: string;
  channelToId?: string;
  isDropToSearch?: boolean;
}


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
  toastr: any;
  config: any;
  videoRoom: JanusVideoRoomService;
  cssUserListHeightCalc: number;
  publisherStatusTracker: PublisherStatusTrackerService;
  internetConnectionType: InternetConnectionType;
  $rootScope: ng.IRootScopeService;

  // Using $injector manually to allow easier constructor overloads
  constructor($injector: any) {
    this.$log = $injector.get('$log');
    this.$document = $injector.get('$document');
    this.toastr = $injector.get('toastr');
    this.config = $injector.get('config');
    this.$timeout = $injector.get('$timeout');
    this.videoRoom = $injector.get('videoRoom');
    this.$rootScope = $injector.get('$rootScope');
    this.publisherStatusTracker = $injector.get('publisherStatusTracker');

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

      // check internet connection status of users
      // this.publisherStatusTracker.setAllUsersStatus(this.usersByLogin);

    scope.$on('channel.dragged', function (e: any, data: IDraggedData) {
      if (e.currentScope.vm.name === data.channelFromId) {
        e.currentScope.vm.onDragUserFrom(data);
      } else if (e.currentScope.vm.name === data.channelToId) {
        e.currentScope.vm.onDragUserTo(data);
      }
    });
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

    if (user) {
      // TODO: The timestamp should be better taken from Janus point of view
      user.joined = moment();
      user.disabled = false;
      // user.disabled = this.publisherStatusTracker.connectionStatusByLogin(login) === InternetConnectionType.danger;
    } else {
      this.$log.error('userJoined: Could not find user by login', login, this.usersByLogin);
    }
  }

  userLeft(login: string) {
    this.$log.info('User left', this.name, login);
    var user = this.usersByLogin[login];

    if (user) {
      delete user.joined;
      delete user.stream;
      // user.connectionStatus = this.publisherStatusTracker.connectionStatusByLogin(login);
    } else {
      this.$log.error('userLeft: Could not find user by login', login, this.usersByLogin);
    }
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
    this.usersByLogin = {};
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

  onUserDrop(data: IDraggedData, isDropToSearch: boolean, event: UIEvent) {
    if (data.channelFromId === this.name) {
      return;
    }
    data.isDropToSearch = isDropToSearch;
    data.channelToId = this.name;
    this.$rootScope.$broadcast('channel.dragged', data);
  }

  onDragUserFrom(data: IDraggedData) {
    if (data.channelToId !== 'control') {
      var idx = 0;
      for (; idx < this.users.length; ++idx) {
        if (this.users[idx].login === data.user.login) {
          break;
        }
      }
      if (idx < this.users.length) {
        this.users.splice(idx, 1);
        this.mapUsersByLogin();
        this.videoRoom.userLeftChannel(this.name, data.user.login);
      } else {
        this.$log.error('onDragUserFrom: Could not find user by login', data.user.login, this.users);
      }
    }
  }

  onDragUserTo(data: IDraggedData) {
    if (!this.usersByLogin[data.user.login]) {
      data.user.channel = this.name;
      this.users.push(data.user);
      this.mapUsersByLogin();
      this.videoRoom.updateChannelUsers(this.name, this.getLoginsList());
    }
    this.userJoined(data.user.login);
  }
  areJoinedOrEnabled(user: IUser) {
    console.log('davgur' + user.login);
    if (!user || user.disabled) {
      return false;
    }
    return !!user.joined;
  }
  areNotJoinedOrEnabled(user: IUser) {
    if (!user) {
      return true;
    }
    if (user.disabled) {
      return false;
    }
    return !user.joined;
  }
}
