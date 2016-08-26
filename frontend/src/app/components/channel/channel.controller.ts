import { JanusVideoRoomService } from '../janus/janusVideoRoom.service';
import { PublisherStatusTrackerService, InternetConnectionType } from '../janus/publisherStatusTracker.service';
import { IUser } from '../auth/auth.service';


export interface IDraggedData {
  user: IUser;
  channelFromId: string;
  channelToId?: string;
  destinationType?: string;
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
  videoRoom: JanusVideoRoomService;
  toastr: any;
  config: any;
  cssUserListHeightCalc: number;
  publisherStatusTracker: PublisherStatusTrackerService;
  internetConnectionType: InternetConnectionType;
  $http: ng.IHttpService;
  $rootScope: ng.IRootScopeService;

  // Using $injector manually to allow easier constructor overloads
  constructor($injector: any) {
    this.$log = $injector.get('$log');
    this.$document = $injector.get('$document');
    this.$timeout = $injector.get('$timeout');
    this.videoRoom = $injector.get('videoRoom');
    this.toastr = $injector.get('toastr');
    this.config = $injector.get('config');
    this.$http = $injector.get('$http');
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

    // TODO: The timestamp should be better taken from Janus point of view
    user.joined = moment();
    user.disabled = false;
    // user.disabled = this.publisherStatusTracker.connectionStatusByLogin(login) === InternetConnectionType.danger;
  }

  userLeft(login: string) {
    this.$log.info('User left', this.name, login);
    var user = this.usersByLogin[login];
    user.joined = null;
    user.stream = null;
    // user.connectionStatus = this.publisherStatusTracker.connectionStatusByLogin(login);
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

  onUserDrop(data: IDraggedData, destinationType: string = 'channel') {
    if (data.channelFromId === this.name) {
      return;
    }
    data.destinationType = (this.name === 'control' && destinationType !== 'disable') ? 'search' :  destinationType;
    data.channelToId = this.name;
    this.$rootScope.$broadcast('channel.dragged', data);
  }

  onDragUserFrom(data: IDraggedData) {
    /*Just define  method*/
  }
  onDragUserTo(data: IDraggedData) {
    if (!this.usersByLogin[data.user.login]) {
      data.user.channel = this.name;
      this.users.push(data.user);
      this.usersByLogin = {};
      this.mapUsersByLogin();
    }
    this.userJoined(data.user.login);
    this.saveUpdatedUserChannel(data.user.id, data.channelToId);
  }

  saveUpdatedUserChannel(userId: Number, channelId: string ) {
    return this.$http.put(this.config.backendUri + '/rest/users/' + userId, {channel: channelId})
      .then((r: any) => {
        return r;
      }, (error: any) => {
        this.toastr.error('Error move user with id to channel.');
        this.$log.error(`Error move user with id ${userId} to channel ${channelId}. Exception = ${error}`);
      });
  }
}
