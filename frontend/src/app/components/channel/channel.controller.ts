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

  userJoined(login: string) {
    // TODO: The timestamp should be better taken from Janus point of view
    var user = this.usersByLogin[login];
    user.joined = moment();
    this.onlineUsers.push(user);

    // Put user video on preview if first user
    if (this.slotUsers['preview'] === null) {
      this.next()
    }
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;

    this.onlineUsers.splice(this.onlineUsers.indexOf(user), 1);
    console.debug('User left', login);

    // Unbind slot users
    for (var slot in this.slotUsers) {
      var slotUser = this.slotUsers[slot];
      if (slotUser && slotUser.login == login) {
        this.slotUsers[slot] = null;
      }
    }

    this.next();
  }

  next() {
    if (this.onlineUsers.length >= 1) {
      if (this.slotUsers['program']) {
        this.janus.unsubscribeFromStream(this.slotUsers['program'].login);
      }

      // Clone the video to program
      this.$scope.programElement.src = this.$scope.previewElement.src;
      attachMediaStream(this.$scope.previewElement, this.slotUsers['nextPreview'].stream);

      this.rotateSlotUsers();

      if (this.slotUsers['program']) {
        this.forwardProgramToSDI();
      }

      ['preview', 'nextPreview'].forEach((slot) => {
        var slotUser = this.slotUsers[slot];
        if (slotUser !== null && !slotUser.stream) {
          this.janus.subscribeForStream(slotUser.login, (stream) => {
            slotUser.stream = stream;
            if (slot === 'preview') {
              attachMediaStream(this.$scope.previewElement, stream);
            }
          });
        }
      });
    }
  }

  forwardProgramToSDI() {
    // Forward program to SDI and change video title
    var sdiPort = this.config.janus.sdiPorts[this.name];
    this.janus.forwardRemoteFeed(this.slotUsers['program'].login, sdiPort);
    this.janus.changeRemoteFeedTitle(this.slotUsers['program'].title, sdiPort);
  }

  rotateSlotUsers() {
    var offset;

    if (this.slotUsers['preview']) {
      offset = this.onlineUsers.indexOf(this.usersByLogin[this.slotUsers['preview'].login]);
    } else {
      offset = 0;
    }

    ['program', 'preview', 'nextPreview'].forEach((slot, index) => {
      this.slotUsers[slot] = this.onlineUsers[(offset + index) % this.onlineUsers.length]
    });
  }
}
