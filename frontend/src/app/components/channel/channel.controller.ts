import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';
import { IUser } from '../../shidur/shidur.service';

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
  janus: JanusVideoRoomService;
  config: any;

  name: string;
  users: IUser[];

  usersByLogin: { [login: string]: IUser } = {};
  onlineUsers: IUser[] = [];

  programForwarded: boolean = true;

  programUser: IUser = null;
  previewUser: IUser = null;

  constructor($scope: IChannelScope, janus: JanusVideoRoomService, config: any) {
    this.$scope = $scope;
    this.janus = janus;
    this.config = config;

    // Mapping users by login for conveniency
    this.mapUsersByLogin();

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

  userJoined(login: string) {
  }

  userLeft(login: string) {
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
