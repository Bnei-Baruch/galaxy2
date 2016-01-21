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
  nextPreviewUser: IUser = null;

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
      this.previewUser = user;

      this.janus.subscribeForStream(user.login, (stream: MediaStream) => {
        user.stream = stream;
        attachMediaStream(this.$scope.previewElement, stream);
      });
    } else if (this.nextPreviewUser === null) {
      this.nextPreviewUser = user;

      this.janus.subscribeForStream(user.login, (stream: MediaStream) => {
        user.stream = stream;
      });
    }
  }

  userLeft(login: string) {
    var user = this.usersByLogin[login];
    user.joined = null;
    user.stream = null;

    this.onlineUsers.splice(this.onlineUsers.indexOf(user), 1);
    console.log('User left', login);

    if (this.programUser === user) {
      // TODO: Put dummy video stream to program
      this.programUser = null;
      this.$scope.programElement.src = null;
    }

    if (this.previewUser === user) {
      if (!this.onlineUsers.length) {
        this.previewUser = null;
        this.$scope.previewElement.src = null;
      } else {
        if (this.nextPreviewUser && this.nextPreviewUser.stream) {
          attachMediaStream(this.$scope.previewElement, this.nextPreviewUser.stream);
          this.previewUser = this.nextPreviewUser;
          var nextPreviewUser = this.getNextUser(this.previewUser);

          if (this.onlineUsers.length >= 3) {
            this.janus.subscribeForStream(nextPreviewUser.login, (stream: MediaStream) => {
              nextPreviewUser.stream = stream;
            });
          }
          this.nextPreviewUser = nextPreviewUser;
        }
      }
    } else if (this.nextPreviewUser === user && this.onlineUsers.length) {
      var nextPreviewUser = this.getNextUser(this.previewUser);

      if (nextPreviewUser) {
        if (this.onlineUsers.length >= 3) {
          this.janus.subscribeForStream(nextPreviewUser.login, (stream: MediaStream) => {
            nextPreviewUser.stream = stream;
          });
        }

        this.nextPreviewUser = nextPreviewUser;
      }
    }
  }

  next() {
    if (this.isReadyToRotate()) {
      // Copy preview to program, attach next preview to preview
      // TODO: Clone video elements instead of copying stream URLs, to avoid blinking
      this.$scope.programElement.src = this.$scope.previewElement.src;

      var oldProgramUser = this.programUser;
      if (this.nextPreviewUser && this.nextPreviewUser.stream) {
        attachMediaStream(this.$scope.previewElement, this.nextPreviewUser.stream);
      }
      this.rotateSlotUsers();
      this.forwardProgramToSDI();

      if (this.onlineUsers.length > 3 && oldProgramUser) {
        this.janus.unsubscribeFromStream(oldProgramUser.login);
        oldProgramUser.stream = null;
      }

      if (this.onlineUsers.length > 2 && !this.nextPreviewUser.stream) {
        var nextPreviewUser = this.nextPreviewUser;
        this.janus.subscribeForStream(nextPreviewUser.login, (stream: MediaStream) => {
          nextPreviewUser.stream = stream;
        });
      }
    }
  }

  forwardProgramToSDI() {
    // Forward program to SDI and change video title
    var sdiPort = this.config.janus.sdiPorts[this.name];

    this.programForwarded = false;

    this.janus.forwardRemoteFeed(this.programUser.login, sdiPort).then(() => {
      this.programForwarded = true;
    }, () => {
      console.log('Failed forwarding feed.');
    });

    this.janus.changeRemoteFeedTitle(this.programUser.title, sdiPort);
  }

  rotateSlotUsers() {
    this.programUser = this.previewUser;

    if (this.nextPreviewUser) {
      this.previewUser = this.nextPreviewUser;
      this.nextPreviewUser = this.getNextUser(this.nextPreviewUser);
    }
  }

  getNextUser(user: IUser) {
    var userIndex = this.onlineUsers.indexOf(user);
    var nextUser = this.onlineUsers[(userIndex + 1) % this.onlineUsers.length];
    return nextUser;
  }

  isReadyToRotate() {
    if (!this.onlineUsers.length || !this.programForwarded) {
      return false;
    } else if (this.onlineUsers.length === 1) {
      return Boolean(this.previewUser && this.previewUser.stream);
    }
    return Boolean(this.nextPreviewUser && this.nextPreviewUser.stream);
  }


  /*
  TODO: Finish the refactoring

  assignUserToProgram(login: string) {
    this.programUser = this.usersByLogin[login];

    if (!this.programUser.stream) {
      this.janus.subscribeForStream(login, (stream) => {
        this.programUser.stream = stream;
        attachMediaStream(this.$scope.programElement, this.programUser.stream);
      });
    }
  }

  unassignUserFromProgram() {
    this.programUser = null;
    this.$scope.programElement.src = null;
  }

  assignUserToPreview(login) {
    this.previewUser = this.usersByLogin[login];

    if (!this.previewUser.stream) {
      this.janus.subscribeForStream(login, (stream) => {
        this.previewUser.stream = stream;
        attachMediaStream(this.$scope.previewElement, this.previewUser.stream);
      });
    }
  }

  unassignUserFromPreview() {
    this.previewUser = null;
    this.$scope.previewElement.src = null;
  }

  assignUserToNextPreview(login) {
    this.nextPreviewUser = this.usersByLogin[login];

    if (!this.nextPreviewUser.stream) {
      this.janus.subscribeForStream(login, (stream) => {
        this.nextPreviewUser.stream = stream;
      });
    }
  }

  unassignUserFromNextPreview() {
    // Seems we don't need this.
  }
  */
}
