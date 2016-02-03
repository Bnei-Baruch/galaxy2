import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';
import { PubSubService } from '../pubSub/pubSub.service';
import { IUser } from '../../shidur/shidur.service';

declare var attachMediaStream: any;

export interface IChannelScope extends ng.IScope {
  users: IUser[];
  name: string;
  selfElement: ng.IAugmentedJQuery;
}

/** @ngInject */
export class BaseChannelController {
  $scope: IChannelScope;
  $timeout: ng.ITimeoutService;
  $document: any;
  janus: JanusVideoRoomService;
  pubSub: PubSubService;
  toastr: any;
  config: any;

  name: string;
  hotkey: string;
  users: IUser[];

  usersByLogin: { [login: string]: IUser } = {};

  programForwarded: boolean = true;

  programUser: IUser = null;
  previewUser: IUser = null;

  constructor($scope: IChannelScope,
      $timeout: ng.ITimeoutService,
      $document: any,
      janus: JanusVideoRoomService,
      pubSub: PubSubService,
      toastr: any, config: any) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$document = $document;
    this.janus = janus;
    this.toastr = toastr;
    this.config = config;

    // To use by children
    this.pubSub = pubSub;

    // Mapping users by login for conveniency
    this.mapUsersByLogin();

    this.bindHotkey();

    this.janus.registerChannel({
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

  userJoined(login: string) {
    // TODO: The timestamp should be better taken from Janus point of view
    var user = this.usersByLogin[login];
    user.joined = moment();

    // Put user video on preview if first user
    if (this.previewUser === null) {
      this.putUserToPreview(user);
    }
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;
    user.stream = null;

    console.log('User left', login);

    if (this.programUser === user) {
      this.putUserToProgram(null);
      // TODO: Put dummy video stream to program
    }

    if (this.previewUser === user) {
      var previewUser = this.getNextUser(user);
      this.putUserToPreview(previewUser);
    }
  }

  trigger() {
    console.error('trigger() not implemented!');
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

  putUserToProgram(user: IUser) {
    if (this.programUser === user) {
      return;
    }

    var oldProgramUser = this.programUser;
    this.programUser = user;

    var programElement = <HTMLMediaElement>this.$scope.selfElement.find('.program').get(0);

    if (user === null) {
      programElement.src = null;
    } else {
      attachMediaStream(programElement, this.programUser.stream);

      this.forwardProgramToSDI();

      if (oldProgramUser) {
        this.janus.unsubscribeFromStream(oldProgramUser.login);
        oldProgramUser.stream = null;
        console.debug('Unsubscribed from', oldProgramUser.login);
      }
    }
  }

  putUserToPreview(user: IUser) {
    if (this.previewUser === user) {
      return;
    }

    var oldPreviewUser = this.previewUser;
    this.previewUser = user;

    var previewElement = <HTMLMediaElement>this.$scope.selfElement.find('.preview').get(0);

    if (user === null) {
      previewElement.src = null;
    } else {
      this.janus.subscribeForStream(user.login, (stream: MediaStream) => {
        user.stream = stream;
        attachMediaStream(previewElement, stream);
        console.debug('Subscribed for', user.login);
      });

      if (oldPreviewUser && oldPreviewUser !== this.programUser) {
        this.janus.unsubscribeFromStream(oldPreviewUser.login);
        oldPreviewUser.stream = null;
        console.debug('Unsubscribed from', oldPreviewUser.login);
      }
    }
  }

  isReadyToSwitch() {
    if (!this.previewUser || !this.programForwarded) {
      return false;
    }

    if (!this.previewUser.stream) {
      return false;
    }

    return true;
  }

  forwardProgramToSDI() {
    // Forward program to SDI and change video title
    var sdiPorts = this.config.janus.sdiPorts[this.name];

    this.programForwarded = false;

    this.janus.forwardRemoteFeed(this.programUser.login, sdiPorts.video, sdiPorts.audio).then(() => {
      this.programForwarded = true;
      this.janus.changeRemoteFeedTitle(this.programUser.title, sdiPorts.video);
    }, () => {
      this.toastr.error('Failed forwarding feed to SDI');
      console.error('Failed forwarding feed to SDI');
    });
  }

  getNextUser(user: IUser) {
    var onlineUsers = this.getOnlineUsers();
    var userIndex = onlineUsers.indexOf(user);

    if (userIndex === -1) {
      return null;
    }


    var nextUser = onlineUsers[(userIndex + 1) % onlineUsers.length];
    return nextUser;
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
      if (user.joined) {
        onlineUsers.push(user);
      }
    });

    onlineUsers.sort((user1: IUser, user2: IUser) => {
      return user1.joined > user2.joined ? 1 : -1;
    });

    return onlineUsers;
  }

}
