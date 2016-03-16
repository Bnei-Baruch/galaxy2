import { IUser } from '../../auth/auth.service';
import { JanusStreamingService } from '../../janus/janusStreaming.service';
import { BaseChannelController } from '../channel.controller';

declare var attachMediaStream: any;

/** @ngInject */
export class SmallChannelController extends BaseChannelController {
  $q: ng.IQService;
  streaming: JanusStreamingService;

  compositeIndex: { program: number, preview: number } = {
    program: null,
    preview: null
  };

  onlineUsers: string[] = [];
  compositeSize: number = 4;
  composites: IUser[][] = [];
  composite: IUser[] = [];

  constructor($injector: any) {
    super($injector);
    this.$q = $injector.get('$q');
    this.streaming = $injector.get('streaming');
  }

  onLink(scope: ng.IScope, element: ng.IAugmentedJQuery) {
    super.onLink(scope, element);

    var streamIds = this.config.janus.sdiPorts[this.name].streamIds;
    this.attachStreamingHandle(this.slotElement.program, streamIds.program);
    this.attachStreamingHandle(this.slotElement.preview, streamIds.preview);

    scope.$on('channel.userEnabled', (e: ng.IAngularEvent, login: string) => {
      if (this.usersByLogin[login]) {
        this.addUserToComposites(login);
      }
    });
  }

  userJoined(login: string) {
    super.userJoined(login);
    this.addUserToComposites(login);
  }

  userLeft(login: string) {
    super.userLeft(login);
    this.removeUserFromComposites(login);
  }

  trigger() {
    if (this.isReadyToSwitch()) {
      this.putCompositeToProgram(this.compositeIndex.preview).then(() => {
        var nextCompositeIndex = (this.compositeIndex.preview + 1) % this.composites.length;
        this.putCompositeToPreview(nextCompositeIndex);
      });
    }
  }

  putCompositeToProgram(index: number): ng.IPromise<any> {
    return this.putCompositeToSlot(index, true);
  }

  putCompositeToPreview(index: number): ng.IPromise<any> {
    return this.putCompositeToSlot(index, false);
  }

  disableUser(user: IUser) {
    super.disableUser(user);
    this.removeUserFromComposites(user.login);
  }

  isReadyToSwitch() {
    if (this.compositeIndex.preview === null ||
        !this.isForwarded.program || !this.isForwarded.preview) {
      return false;
    }

    return true;
  }

  // TODO: Handle HTTP errors and rollback to old state in case of an error
  private putCompositeToSlot(index: number, program: boolean): ng.IPromise<any> {
    var deffered = this.$q.defer();

    var slotName = this.getSlotName(program);

    if (index === this.compositeIndex[slotName]) {
      deffered.resolve();
      return deffered.promise;
    }


    if (index !== null && this.composites[index]) {
      this.composite = this.composites[index];

      if (this.composite.length < this.compositeSize) {
        console.debug('Composite is not complete, forwarding refused');
        deffered.reject();
        return deffered.promise;
      }
    }

    this.compositeIndex[slotName] = index;
    this.isForwarded[slotName] = false;

    var portsConfig = this.config.janus.sdiPorts[this.name];
    var videoPorts = portsConfig.video[slotName];

    var logins: string[] = Array.apply(null, Array(this.compositeSize));

    this.composite.forEach((user: IUser, userIndex: number) => {
      logins[userIndex] = user.login;
    });

    // TODO: move to base controller
    this.videoRoom.forwardRemoteFeeds(logins, portsConfig.forwardIp, videoPorts).then(() => {
      // Forwarding succeeded, changing titles

      if (program) {
        logins.forEach((login: string, loginIndex: number) => {
          var title: string;

          if (this.usersByLogin[login]) {
            title = this.usersByLogin[login].title;
          } else {
            title = '';
          }

          this.videoRoom.changeRemoteFeedTitle(title, videoPorts[loginIndex]);
        });
      }

      this.isForwarded[slotName] = true;

      deffered.resolve();
    }, () => {
      var error = 'Failed forwarding feed to SDI';
      this.toastr.error(error);
      console.error(error);
      deffered.reject();
    });

    return deffered.promise;
  }

  private getSlotName(program: boolean): string {
    var slotName = program ? 'program' : 'preview';
    return slotName;
  }

  /**
   * Adds a user to the composites array.
   * Rules:
   *  - No complete composites present, just add user to the first one.
   *  - All present composites are complete or there are no composites, add user and complete
   *  composite by users from the first composite.
   *
   * @param login User login
   * @returns     Nothing
   */
  private addUserToComposites(login: string): void {
    if (this.onlineUsers.indexOf(login) === -1) {
      this.onlineUsers.push(login);
      this.constructComposites();

      // Forward first composite to preview once it's complete
      if (this.compositeIndex.preview === null && this.onlineUsers.length >= this.compositeSize) {
        this.putCompositeToPreview(0);
      }
    }
  }

  /**
   * Removes a user from the composites array.
   * Rules:
   *  - One or no composites present, just remove user from the first one.
   *  - Two or more composites present, find a replacement for the user from the last composite.
   *
   * @param login User login
   * @returns     Nothing
   */
  private removeUserFromComposites(login: string): void {
    if (this.onlineUsers.indexOf(login) !== -1) {
      var userIndex = this.onlineUsers.indexOf(login);
      var lastLogin = this.onlineUsers.pop();

      if (login !== lastLogin) {
        this.onlineUsers[userIndex] = lastLogin;
      }

      this.constructComposites();
    }
  }

  private constructComposites() {
    this.composites = [];
    var composite: IUser[] = [];

    // Building composites
    var lastUserIndex = this.onlineUsers.length - 1;

    this.onlineUsers.forEach((login: string, userIndex: number) => {
      composite.push(this.usersByLogin[login]);
      if (composite.length === this.compositeSize || userIndex === lastUserIndex) {
        this.composites.push(composite);
        composite = [];
      }
    });

    // Completing the last composite if needed
    var firstCompositeIndex = 0;
    var firstComposite = this.composites[0];
    var lastComposite = this.composites[this.composites.length - 1];

    if (this.composites.length > 1) {

      for (var userIndex = lastComposite.length; userIndex < this.compositeSize; userIndex++) {
        // Clone to avoid global user object override
        lastComposite[userIndex] = angular.extend({
          completesComposite: true
        }, firstComposite[firstCompositeIndex]);

        firstCompositeIndex++;
      }
    }
  }

  private attachStreamingHandle(slotElement: HTMLMediaElement, streamId: string) {
    this.streaming
      .attachStreamingHandle(streamId)
      .then((stream: MediaStream) => {
        attachMediaStream(slotElement, stream);
      });
  }
}
