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
export class ChannelController {
  channel: ChannelService;

  name: string;
  users: IUser[];
  hotkey: string;

  usersByLogin: { [login: string]: IUser } = {};
  onlineUsers: IUser[] = [];

  programUser: IUser = null;
  previewUser: IUser = null;
  nextPreviewUser: IUser = null;

  constructor(public $scope: IChannelScope,
              public $timeout: ng.ITimeoutService,
              public $document: any,
              public janus: JanusVideoRoomService,
              public config: any) {

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
      this.previewUser = user;

      this.janus.subscribeForStream(user.login, (stream) => {
        user.stream = stream;
        attachMediaStream(this.$scope.previewElement, stream);
      });
    } else if (this.nextPreviewUser === null) {
      this.nextPreviewUser = user;

      this.janus.subscribeForStream(user.login, (stream) => {
        user.stream = stream;
      });
    }
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;
    user.stream = null;

    this.onlineUsers.splice(this.onlineUsers.indexOf(user), 1);
    console.debug('User left', login);

    if (this.programUser === user) {
      this.programUser = null;
      this.$scope.programElement.src = null;
    } else if (this.previewUser === user) {
      if (!this.onlineUsers.length) {
        this.$scope.programElement.src = null;
      } else {
        attachMediaStream(this.$scope.previewElement, this.nextPreviewUser.stream);
        this.previewUser = this.nextPreviewUser;
        var nextPreviewUser = this.getNextUser(this.previewUser);

        if (this.onlineUsers.length >= 3) {
          this.janus.subscribeForStream(nextPreviewUser.login, (stream) => {
            nextPreviewUser.stream = stream;
          });
        }
        this.nextPreviewUser = nextPreviewUser;
      }
    } else if (this.nextPreviewUser === user && this.onlineUsers.length) {
      var nextPreviewUser = this.getNextUser(this.previewUser);

      if (this.onlineUsers.length >= 3) {
        this.janus.subscribeForStream(nextPreviewUser.login, (stream) => {
          nextPreviewUser.stream = stream;
        });
      }

      this.nextPreviewUser = nextPreviewUser;
    }
  }

  next() {
    if (this.onlineUsers.length > 1 && this.nextPreviewUser.stream) {
      // Copy preview to program, attach next preview to preview
      this.$scope.programElement.src = this.$scope.previewElement.src;
      attachMediaStream(this.$scope.previewElement, this.nextPreviewUser.stream);

      var oldProgramUser = this.programUser;

      this.rotateSlotUsers();
      this.forwardProgramToSDI();

      if (this.onlineUsers.length > 3 && oldProgramUser) {
        this.janus.unsubscribeFromStream(oldProgramUser.login);
        oldProgramUser.stream = null;
      }

      if (this.onlineUsers.length > 2 && !this.nextPreviewUser.stream) {
        var nextPreviewUser = this.nextPreviewUser;
        this.janus.subscribeForStream(nextPreviewUser.login, (stream) => {
          nextPreviewUser.stream = stream;
        });
      }
    }
  }

  forwardProgramToSDI() {
    // Forward program to SDI and change video title
    var sdiPort = this.config.janus.sdiPorts[this.name];
    this.janus.forwardRemoteFeed(this.programUser.login, sdiPort);
    this.janus.changeRemoteFeedTitle(this.programUser.title, sdiPort);
  }

  rotateSlotUsers() {
    this.programUser = this.previewUser;
    this.previewUser = this.nextPreviewUser;

    this.nextPreviewUser = this.getNextUser(this.nextPreviewUser);
  }

  getNextUser(user: IUser) {
    var userIndex = this.onlineUsers.indexOf(user);
    var nextUser = this.onlineUsers[(userIndex + 1) % this.onlineUsers.length];
    return nextUser;
  }
}
