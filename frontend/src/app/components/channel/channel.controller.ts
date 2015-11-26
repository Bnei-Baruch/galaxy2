import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';
import { IUser } from '../../shidur/shidur.service';
import { ChannelService } from './channel.service';

export interface IChannelScope extends ng.IScope {
  users: IUser[];
  name: string;
  selfElement: ng.IAugmentedJQuery;
  programElement: HTMLMediaElement;
  previewElement: HTMLMediaElement;
}

/** @ngInject */
export class ChannelController {
  users: IUser[];
  usersByLogin: { [login: string]: IUser } = {};
  previewLogin: string = null;
  programLogin: string = null;
  scope: IChannelScope;
  toastr: any;
  channel: ChannelService;
  janus: JanusVideoRoomService;
  name: string;
  hotkey: string;

  constructor($scope: IChannelScope,
              public $timeout: any,
              public $document: any,
              janus: JanusVideoRoomService,
              toastr: any, config: any) {
    this.scope = $scope;
    this.janus = janus;

    this.bindHotkey();

    this.users.forEach((user) => {
      this.usersByLogin[user.login] = user;
    });

    this.janus.registerChannel({
      name: this.name,
      users: this.users.map((u) => { return u.login; }),
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
    this.usersByLogin[login].joined = moment();

    // Means he sends video/audio to janus
    // Now we decide to get his video/audio here or not.
    // If program or preview ==> get stream + show on video element
    if (!this.previewLogin) {
      var element = this.scope.selfElement.find('.preview').get(0);
      this.janus.attachRemoteHandle(login, element);
      this.previewLogin = login;
    }
  }

  userLeft(login: string) {
    this.usersByLogin[login].joined = null;
    console.debug('User left', login);

    this.janus.releaseRemoteHandle(login);
    this.next();
  }

  next() {
    if (!this.previewLogin) {
      return;
    }

    // Clone the video to program
    this.scope.programElement.src = this.scope.previewElement.src;

    // TODO: trigger switch from Janus here
    // this.janus.switch(...)

    if (this.programLogin) {
      this.janus.releaseRemoteHandle(this.programLogin);
    }

    this.programLogin = this.previewLogin;

    // Pick next user for preview
    var nextUser = this.getNextUser();

    if (nextUser !== null) {
      this.previewLogin = nextUser.login;
    } else {
      this.programLogin = this.previewLogin = null;
    }
  }

  getNextUser() {
    var currentUser = this.usersByLogin[this.previewLogin];
    var userOffset = this.users.indexOf(currentUser);
    var userIndex = userOffset + 1;

    while (userIndex - userOffset <= this.users.length) {
      currentUser = this.users[userIndex % this.users.length];
      if (currentUser.joined) {
        return currentUser;
      }
      userIndex++;
    }

    return null;
  }
}
