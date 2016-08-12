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

    var streamIds = this.config.janus.videoRoom.sdiPorts[this.name].streamIds;
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
    if (this.compositeIndex.preview === null || this.videoRoom.isForwardingInProgress) {
      return false;
    }

    return true;
  }

  fixTitles() {
    if (this.composite) {
      var portsConfig = this.config.janus.videoRoom.sdiPorts[this.name];
      var videoPorts = portsConfig.video[this.getSlotName(true)];
      this.composite.forEach((user: IUser, index: number) => {
        this.videoRoom.changeRemoteFeedTitle(user.title, videoPorts[index]);
      });
    }
  }

  // TODO: Handle HTTP errors and rollback to old state in case of an error
  private putCompositeToSlot(index: number, program: boolean, force: boolean = false): ng.IPromise<any> {
    var deffered = this.$q.defer();

    var slotName = this.getSlotName(program);

    // Composite already in slot ?
    if (index === this.compositeIndex[slotName] && !force) {
      deffered.resolve();
      return deffered.promise;
    }

    // Composite is complete ?
    var composite = this.composites[index];
    if (index !== null && composite) {
      if (composite.length < this.compositeSize) {
        this.$log.info('Composite is not complete, forwarding refused');
        this.toastr.info('Composite is not complete, selection aborted');
        deffered.reject();
        return deffered.promise;
      } else {
        this.composite = composite;
      }
    }

    var logins: string[] = Array.apply(null, Array(this.compositeSize));

    var portsConfig = this.config.janus.videoRoom.sdiPorts[this.name];
    var videoPorts = portsConfig.video[slotName];

    var oldCompositeIndex = this.compositeIndex[slotName];
    var oldComposite = this.composite;

    this.compositeIndex[slotName] = index;

    // TODO: move to base controller
    this.$log.info('Putting composite to slot', slotName, logins);
    this.videoRoom.forwardRemoteFeeds(this.composite, portsConfig.forwardIp, videoPorts, undefined, program).then(() => {
      deffered.resolve();
    }, () => {
      // Reverting composite selection
      this.compositeIndex[slotName] = oldCompositeIndex;
      this.composite = oldComposite;

      this.$log.error('Error putting composite to slot', slotName);
      this.toastr.error(`Error forwarding composite to ${slotName}`);
      deffered.reject();
    });

    return deffered.promise;
  }

  private getSlotName(program: boolean): string {
    return program ? 'program' : 'preview';
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

      // save current preview composite
      var oldPrevComposite = angular.copy(this.composites[this.compositeIndex.preview]);

      this.constructComposites();

      var newPrevComposite = angular.copy(this.composites[this.compositeIndex.preview]);
      if (!this.areCompositesEqual(oldPrevComposite, newPrevComposite)) {
        this.putCompositeToSlot(this.compositeIndex.preview, false, true);
      }
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

  private areCompositesEqual(first: IUser[], second: IUser[]) {
    if (first === undefined || second  === undefined) {
      return false;
    }

    return first.every((user: IUser, i: number) => {
      return user.login === second[i].login;
    });
  }
}
