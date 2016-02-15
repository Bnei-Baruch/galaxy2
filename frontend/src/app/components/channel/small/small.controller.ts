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

  compositeSize: number = 4;
  composites: IUser[][] = [];

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
    if (this.compositeIndex.preview === null || !this.isForwarded.program) {
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
    }

    var composite: IUser[] = [];

    if (index !== null && this.composites[index]) {
      composite = this.composites[index];
    }

    this.compositeIndex[slotName] = index;
    this.isForwarded[slotName] = false;

    var portsConfig = this.config.janus.sdiPorts[this.name];
    var videoPorts = portsConfig.video[slotName];

    var logins: string[] = Array.apply(null, Array(this.compositeSize));

    composite.forEach((user: IUser, userIndex: number) => {
      logins[userIndex] = user.login;
    });

    // TODO: move to base controller
    this.videoRoom.forwardRemoteFeeds(logins, portsConfig.forwardIp, videoPorts).then(() => {
      // Forwarding succeeded, changing titles
      logins.forEach((login: string, loginIndex: number) => {
        var title: string;

        if (this.usersByLogin[login]) {
          title = this.usersByLogin[login].title;
        } else {
          title = '';
        }

        this.videoRoom.changeRemoteFeedTitle(title, videoPorts[loginIndex]);
      });

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
    var user: IUser = this.usersByLogin[login];

    var firstCompositeIndex = 0;
    var firstComposite: IUser[] = this.composites[0];
    var lastComposite: IUser[] = this.composites[this.composites.length - 1];

    // No complete composites present, no completion required
    if (firstComposite === undefined || firstComposite.length < this.compositeSize) {
      firstCompositeIndex = null;
    }

    // All composites are complete or no composites, add a new one
    if (lastComposite === undefined || (lastComposite.length === this.compositeSize &&
        !lastComposite[this.compositeSize - 1].completesComposite)) {
      lastComposite = [];
      this.composites.push(lastComposite);
    }

    if (lastComposite) {
      var userAdded = false;

      for (var index = 0; index < this.compositeSize; index++) {
        var lastCompositeUser = lastComposite[index];
        if (lastCompositeUser === undefined || lastCompositeUser.completesComposite) {
          if (userAdded) {
            if (firstCompositeIndex !== null) {
              lastComposite[index] = angular.extend({
                completesComposite: true
              }, firstComposite[firstCompositeIndex]);

              firstCompositeIndex++;
            }
          } else {
            lastComposite[index] = user;
            userAdded = true;
          }
        }
      }
    }

    console.debug('composites:', this.composites);
  }

  private removeUserFromComposites(login: string): number {
    var user = this.usersByLogin[login];
    var result: number = null;

    for (var compositeIndex = 0; compositeIndex < this.composites.length; compositeIndex++) {
      var composite = this.composites[compositeIndex];
      var userIndex = composite.indexOf(user);

      if (userIndex !== -1) {
        this.spliceComposite(userIndex, compositeIndex);

        // Append the last user from the last composite
        if (this.composites.length > compositeIndex + 1) {
          var lastCompositeIndex = this.composites.length - 1;
          var lastComposite = this.composites[lastCompositeIndex];
          var lastUserIndex = lastComposite.length - 1;

          composite.push(lastComposite[lastUserIndex]);
          this.spliceComposite(lastUserIndex, lastCompositeIndex);
        }

        result = compositeIndex;
      }
    }

    return result;
  }

  private spliceComposite (spliceUserIndex: number, spliceCompositeIndex: number) {
    var spliceComposite = this.composites[spliceCompositeIndex];
    spliceComposite.splice(spliceUserIndex, 1);

    if (!spliceComposite.length) {
      this.composites.splice(spliceCompositeIndex, 1);
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
