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
  $q: ng.IQService;
  videoRoom: JanusVideoRoomService;
  streaming: JanusStreamingService;
  pubSub: PubSubService;
  toastr: any;
  config: any;

  name: string;
  users: IUser[];

  usersByLogin: { [login: string]: IUser } = {};

  isForwarded: { program: boolean, preview: boolean } = {
    program: true,
    preview: false
  };

  programUser: IUser = null;
  previewUser: IUser = null;

  constructor($scope: IChannelScope,
      $q: ng.IQService,
      videoRoom: JanusVideoRoomService,
      streaming: JanusStreamingService,
      pubSub: PubSubService,
      toastr: any, config: any) {

    this.$scope = $scope;
    this.$q = $q;
    this.videoRoom = videoRoom;
    this.streaming = streaming;
    this.toastr = toastr;
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
    user.disabled = false;
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

  getLoginsList() {
    return this.users.map((user: IUser) => { return user.login; });
  }

  getOnlineUsers() {
    var onlineUsers: IUser[] = [];

    this.users.forEach((user: IUser) => {
      if (user.joined && !user.disabled) {
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
