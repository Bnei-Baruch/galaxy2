import { JanusVideoRoomService } from '../janus/janusVideoRoom.service';
import { JanusStreamingService } from '../janus/janusStreaming.service';
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
  videoRoom: JanusVideoRoomService;
  streaming: JanusStreamingService;
  pubSub: PubSubService;
  config: any;

  name: string;
  users: IUser[];

  usersByLogin: { [login: string]: IUser } = {};

  programForwarded: boolean = true;

  programUser: IUser = null;
  previewUser: IUser = null;

  constructor($scope: IChannelScope,
      videoRoom: JanusVideoRoomService,
      streaming: JanusStreamingService,
      pubSub: PubSubService,
      config: any) {

    this.$scope = $scope;
    this.videoRoom = videoRoom;
    this.streaming = streaming;
    this.config = config;

    // To use by children
    this.pubSub = pubSub;

    // Mapping users by login for conveniency
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

  userJoined(login: string) {
    // TODO: The timestamp should be better taken from Janus point of view
    var user = this.usersByLogin[login];
    user.joined = moment();
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;
    user.stream = null;

    console.log('User left', login);
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

    var programElement = this.getMediaElement('.program');

    if (user === null) {
      programElement.src = null;
    } else {
      attachMediaStream(programElement, this.programUser.stream);

      this.forwardProgramToSDI();

      if (oldProgramUser) {
        this.videoRoom.unsubscribeFromStream(oldProgramUser.login);
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

    var previewElement = this.getMediaElement('.preview');

    if (user === null) {
      previewElement.src = null;
    } else {
      this.videoRoom.subscribeForStream(user.login, (stream: MediaStream) => {
        user.stream = stream;
        attachMediaStream(previewElement, stream);
        console.debug('Subscribed for', user.login);
      });

      if (oldPreviewUser && oldPreviewUser !== this.programUser) {
        this.videoRoom.unsubscribeFromStream(oldPreviewUser.login);
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

    this.videoRoom.forwardRemoteFeed(this.programUser.login, sdiPorts.video, sdiPorts.audio).then(() => {
      this.programForwarded = true;
      this.videoRoom.changeRemoteFeedTitle(this.programUser.title, sdiPorts.video);
    }, () => {
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

  getMediaElement(cssSelector: string) {
    var element = <HTMLMediaElement>this.$scope.selfElement.find(cssSelector).get(0);
    return element;
  }
}
