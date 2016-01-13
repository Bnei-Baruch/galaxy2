import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';
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
    console.error('userJoined() not implemented!');
  }

  userLeft(login: string) {
    console.error('userLeft() not implemented!');
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
    var sdiPort = this.config.janus.sdiPorts[this.name];

    this.programForwarded = false;

    this.janus.forwardRemoteFeed(this.programUser.login, sdiPort, () => {
      this.programForwarded = true;
      this.janus.changeRemoteFeedTitle(this.programUser.title, sdiPort);
    });
  }
}
