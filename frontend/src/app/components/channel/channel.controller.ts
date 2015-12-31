import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';
import { IUser } from '../../shidur/shidur.service';
import { ChannelService } from './channel.service';

declare var attachMediaStream: any;

export interface IChannelScope extends ng.IScope {
  users: IUser[];
  name: string;
  selfElement: ng.IAugmentedJQuery;
  programElement: HTMLVideoElement;
  previewElement: HTMLVideoElement;
}

/** @ngInject */
export class BaseChannelController {
  $scope: IChannelScope;
  $timeout: ng.ITimeoutService;
  $document: any;
  janus: JanusVideoRoomService;
  config: any;

  channel: ChannelService;

  name: string;
  users: IUser[];
  hotkey: string;

  usersByLogin: { [login: string]: IUser } = {};
  onlineUsers: IUser[] = [];

  programForwarded: boolean = true;

  programUser: IUser = null;
  previewUser: IUser = null;

  constructor($scope: IChannelScope,
              $timeout: ng.ITimeoutService,
              $document: any,
              janus: JanusVideoRoomService,
              config: any) {

    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$document = $document;
    this.janus = janus;
    this.config = config;

    // Mapping users by login for conveniency

    this.mapUsersByLogin();
    this.bindHotkey();

    this.janus.registerChannel({
      name: this.name,
      users: this.users.map((user: IUser) => { return user.login; }),
      joinedCallback: (login: string) => {
        this.userJoined(login);
      },
      leftCallback: (login: string) => {
        this.userLeft(login);
      }
    });
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
            this.next();
          });
        }
      });
    }
  }

  /* TODO: refactor repeating code in userJoined/userLeft/next() */

  userJoined(login: string) {
    // TODO: The timestamp should be better taken from Janus point of view
    var user = this.usersByLogin[login];
    user.joined = moment();
    this.onlineUsers.push(user);

    // Put user video on preview if first user
    if (this.previewUser === null) {
      this.putUserToPreview(user);
    }
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;
    user.stream = null;

    this.onlineUsers.splice(this.onlineUsers.indexOf(user), 1);
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

  next() {
    if (this.isReadyToSwitch()) {
      this.putUserToProgram(this.previewUser);
      var nextUser = this.getNextUser(this.previewUser);
      this.putUserToPreview(nextUser);
    }
  }

  putUserToProgram(user: IUser) {
    if (this.programUser === user) {
      return;
    }

    var oldProgramUser = this.programUser;
    this.programUser = user;

    if (user === null) {
      this.$scope.programElement.src = null;
    } else {
      var programElement = this.$scope.selfElement.find('.program');
      attachMediaStream(programElement.get(0), this.programUser.stream);

      this.forwardProgramToSDI();

      this.janus.unsubscribeFromStream(oldProgramUser.login);
      oldProgramUser.stream = null;
    }
  }

  putUserToPreview(user: IUser) {
    this.previewUser = user;

    this.janus.subscribeForStream(user.login, (stream: MediaStream) => {
      user.stream = stream;
      var previewElement = this.$scope.selfElement.find('.preview');
      attachMediaStream(previewElement.get(0), stream);
    });
  }

  getNextUser(user: IUser) {
    var userIndex = this.onlineUsers.indexOf(user);

    if (userIndex === -1) {
      return null;
    }

    var nextUser = this.onlineUsers[(userIndex + 1) % this.onlineUsers.length];
    return nextUser;
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
    var sdiPort = this.config.janus.sdiPorts[this.name];

    this.programForwarded = false;

    this.janus.forwardRemoteFeed(this.programUser.login, sdiPort, () => {
      this.programForwarded = true;
      this.janus.changeRemoteFeedTitle(this.programUser.title, sdiPort);
    });
  }
}
