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

  slotUsers: { [slot: string]: IUser } = {
    program: null,
    preview: null,
    nextPreview: null
  }

  constructor(public $scope: IChannelScope,
              public $timeout: ng.ITimeoutService,
              public $document: any,
              public janus: JanusVideoRoomService,
              public config: any) {

    this.usersByLogin = this.mapUsersByLogin();
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

  userJoined(login: string) {
    // TODO: The timestamp should be better taken from Janus point of view
    var user = this.usersByLogin[login];
    user.joined = moment();
    this.onlineUsers.push(user);

    // Put user video on preview if first user
    if (this.previewUser === null) {
      this.next()
    }
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;

    this.onlineUsers.splice(this.onlineUsers.indexOf(user), 1);
    console.debug('User left', login);

    // Unbind slot users
    for (slot in this.slotUsers) {
      var slotUser = this.slotUsers[slot];
      if (slotUser && slotUser.login == login) {
        this.slotUsers[slot] = null;
      }
    }

    this.next();
  }

  next() {
    if (this.slotUsers.preview) {
      this.janus.unsubscribeFromStream(this.slotUsers.program.login);

      this.rotateSlotUsers();

      // Clone the video to program
      this.$scope.programElement.src = this.$scope.previewElement.src;

      this.forwardProgramToSDI();
    }

      // this.previewUser = this.usersByLogin[login];
      // this.janus.subscribeForStream(login, (stream) => {
      //   // TODO: check if users haven't been rotated
      //   attachMediaStream(this.$scope.previewElement, stream);
      // });

  }

  forwardProgramToSDI() {
    // Forward program to SDI and change video title
    var sdiPort = this.config.janus.sdiPorts[this.name];
    this.janus.forwardRemoteFeed(this.programUser.login, sdiPort);
    this.janus.changeRemoteFeedTitle(this.programUser.title, sdiPort);
  }

  rotateSlotUsers() {
    var userIndex = this.onlineUsers.indexOf(this.usersByLogin[this.previewUser.login]);
    var nextUser = this.onlineUsers[(userIndex + 1) % this.onlineUsers.length]
    return nextUser;
  }
}
