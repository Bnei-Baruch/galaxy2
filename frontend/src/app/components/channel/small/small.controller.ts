import { IUser } from '../../../shidur/shidur.service';
import { JanusStreamingService } from '../../janus/janusStreaming.service';
import { BaseChannelController } from '../channel.controller';

declare var attachMediaStream: any;

/** @ngInject */
export class SmallChannelController extends BaseChannelController {
  $q: ng.IQService;
  streaming: JanusStreamingService;

  userSetIndex: { program: number, preview: number } = {
    program: null,
    preview: null
  };

  userSetSize: number = 4;
  userSets: IUser[][] = [];

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
      this.putUserSetToProgram(this.userSetIndex.preview).then(() => {
        var nextUserSetIndex = (this.userSetIndex.preview + 1) % this.userSets.length;
        this.putUserSetToPreview(nextUserSetIndex);
      });
    }
  }

  putUserSetToProgram(index: number): ng.IPromise<any> {
    return this.putUserSetToSlot(index, true);
  }

  putUserSetToPreview(index: number): ng.IPromise<any> {
    return this.putUserSetToSlot(index, false);
  }

  disableUser(user: IUser) {
    super.disableUser(user);

    this.withdrawUser(user.login);
  }

  isReadyToSwitch() {
    if (this.userSetIndex.preview === null || !this.isForwarded.program) {
      return false;
    }

    return true;
  }

  private acceptUser(login: string) {
    this.addUserToUserSets(this.usersByLogin[login]);

    // Forwarding commented out until concurrency issues solved
    /*
    // Re-forward preview user set to SDI in case of change
    if (this.userSetIndex.preview === this.userSets.length - 1) {
      this.putUserSetToPreview(this.userSetIndex.preview);
    }
    */
  }

  private withdrawUser(login: string) {
    this.removeUserFromUserSets(this.usersByLogin[login]);

    // Forwarding commented out until concurrency issues solved
    /*
    // TODO: Handle HTTP errors and rollback to old state in case of an error
    this.reforwardSlotOnUserRemoval(changedUserSetIndex, false).then(() => {
      this.reforwardSlotOnUserRemoval(changedUserSetIndex, true);
    });
    */
  }

  /*
  private reforwardSlotOnUserRemoval(changedUserSetIndex: number, program: boolean): ng.IPromise<any> {
    var slotName = this.getSlotName(program);
    var deffered = this.$q.defer();

    if (this.userSetIndex[slotName] > this.userSets.length) {
      // User set removed
      return this.putUserSetToSlot(null, program);
    } else if (changedUserSetIndex === this.userSetIndex[slotName]) {
      // Slot user set changed
      return this.putUserSetToSlot(changedUserSetIndex, program);
    }

    deffered.resolve();
    return deffered.promise;
  } */

  // TODO: Handle HTTP errors and rollback to old state in case of an error
  private putUserSetToSlot(index: number, program: boolean): ng.IPromise<any> {
    var deffered = this.$q.defer();

    var slotName = this.getSlotName(program);

    if (index === this.userSetIndex[slotName]) {
      deffered.resolve();
    }

    var userSet: IUser[] = [];

    if (index !== null && this.userSets[index]) {
      userSet = this.userSets[index];
    }

    this.userSetIndex[slotName] = index;
    this.isForwarded[slotName] = false;

    var portsConfig = this.config.janus.sdiPorts[this.name];
    var videoPorts = portsConfig.video[slotName];

    var logins: string[] = Array.apply(null, Array(this.userSetSize));

    userSet.forEach((user: IUser, userIndex: number) => {
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

  private addUserToUserSets(user: IUser): void {
    var lastUserSet = this.userSets[this.userSets.length - 1];

    if (lastUserSet && lastUserSet.length < this.userSetSize) {
      lastUserSet.push(user);
    } else {
      var userSet: IUser[] = [user];
      this.userSets.push(userSet);
    }
  }

  private removeUserFromUserSets(user: IUser): number {
    var result: number = null;

    for (var userSetIndex = 0; userSetIndex < this.userSets.length; userSetIndex++) {
      var userSet = this.userSets[userSetIndex];
      var userIndex = userSet.indexOf(user);

      if (userIndex !== -1) {
        this.spliceUserSet(userIndex, userSetIndex);

        // Append the last user from the last composite
        if (this.userSets.length > userSetIndex + 1) {
          var lastUserSetIndex = this.userSets.length - 1;
          var lastUserSet = this.userSets[lastUserSetIndex];
          var lastUserIndex = lastUserSet.length - 1;

          userSet.push(lastUserSet[lastUserIndex]);
          this.spliceUserSet(lastUserIndex, lastUserSetIndex);
        }

        result = userSetIndex;
      }
    }

    return result;
  }

  private spliceUserSet (spliceUserIndex: number, spliceUserSetIndex: number) {
    var spliceUserSet = this.userSets[spliceUserSetIndex];
    spliceUserSet.splice(spliceUserIndex, 1);

    if (!spliceUserSet.length) {
      this.userSets.splice(spliceUserSetIndex, 1);
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
