import { IUser } from '../../../shidur/shidur.service';
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
        this.acceptUser(login);
      }
    });
  }

  userJoined(login: string) {
    super.userJoined(login);
    this.acceptUser(login);
  }

  userLeft(login: string) {
    super.userLeft(login);
    this.withdrawUser(login);
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

    this.withdrawUser(user.login);
  }

  isReadyToSwitch() {
    if (this.compositeIndex.preview === null || !this.isForwarded.program) {
      return false;
    }

    return true;
  }

  private acceptUser(login: string) {
    this.addUserToComposites(this.usersByLogin[login]);

    // Forwarding commented out until concurrency issues solved
    /*
    // Re-forward preview user set to SDI in case of change
    if (this.compositeIndex.preview === this.composites.length - 1) {
      this.putCompositeToPreview(this.compositeIndex.preview);
    }
    */
  }

  private withdrawUser(login: string) {
    this.removeUserFromComposites(this.usersByLogin[login]);

    // Forwarding commented out until concurrency issues solved
    /*
    // TODO: Handle HTTP errors and rollback to old state in case of an error
    this.reforwardSlotOnUserRemoval(changedCompositeIndex, false).then(() => {
      this.reforwardSlotOnUserRemoval(changedCompositeIndex, true);
    });
    */
  }

  /*
  private reforwardSlotOnUserRemoval(changedCompositeIndex: number, program: boolean): ng.IPromise<any> {
    var slotName = this.getSlotName(program);
    var deffered = this.$q.defer();

    if (this.compositeIndex[slotName] > this.composites.length) {
      // User set removed
      return this.putCompositeToSlot(null, program);
    } else if (changedCompositeIndex === this.compositeIndex[slotName]) {
      // Slot user set changed
      return this.putCompositeToSlot(changedCompositeIndex, program);
    }

    deffered.resolve();
    return deffered.promise;
  } */

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

  private addUserToComposites(user: IUser): void {
    var lastComposite = this.composites[this.composites.length - 1];

    if (lastComposite && lastComposite.length < this.compositeSize) {
      lastComposite.push(user);
    } else {
      var composite: IUser[] = [user];
      this.composites.push(composite);
    }
  }

  private removeUserFromComposites(user: IUser): number {
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
