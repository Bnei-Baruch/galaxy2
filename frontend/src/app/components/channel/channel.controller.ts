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
  usersByLogin: { [login: string]: IUser };
  previewLogin: string;
  programLogin: string;
  scope: IChannelScope;
  toastr: any;
  channel: ChannelService;
  janus: JanusVideoRoomService;
  name: string;

  constructor($scope: IChannelScope,
              public $timeout: any,
              janus: JanusVideoRoomService,
              toastr: any, config: any) {
    this.scope = $scope;
    this.janus = janus;
    this.previewLogin = null;
    this.usersByLogin = {};

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

    if (login === this.previewLogin) {
      this.previewLogin = null;
    }
  }

  next() {
    if (!this.previewLogin) {
      return;
    }

    // Clone the video to program
    this.scope.programElement.src = this.scope.previewElement.src;

    // TODO: trigger switch from Janus

    if (this.programLogin) {
      this.janus.releaseRemoteHandle(this.programLogin);
    }

    this.programLogin = this.previewLogin;

    // Pick next user for preview
  }
}
