import { IUser } from '../../../shidur/shidur.service';
import { JanusStreamingService } from '../../janus/janusStreaming.service';
import { BaseChannelController } from '../channel.controller';

declare var attachMediaStream: any;

/** @ngInject */
export class SmallChannelController extends BaseChannelController {
  streaming: JanusStreamingService;

  userSetIndex: { program: number, preview: number } = {
    program: null,
    preview: null
  };

  userSetSize: number = 4;
  userSets: IUser[][];

  constructor($injector: any) {
    super($injector);
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
    var changedUserSetIndex = this.getUserSetIndexForUser(login);

    super.userLeft(login);
    this.constructUserSets();

    this.reforwardSlotOnUserRemoval(changedUserSetIndex, false);
    this.reforwardSlotOnUserRemoval(changedUserSetIndex, true);
  }

  trigger() {
    if (this.isReadyToSwitch()) {
      this.putUserSetToProgram(this.userSetIndex.preview);
      var nextUserSetIndex = (this.userSetIndex.preview + 1) % this.userSets.length;
      this.putUserSetToPreview(nextUserSetIndex);
    }
  }

  putUserSetToProgram(index: number) {
    this.putUserSetToSlot(index, true);
  }

  putUserSetToPreview(index: number) {
    this.putUserSetToSlot(index, false);
  }

  disableUser(user: IUser) {
    super.disableUser(user);

    this.constructUserSets();
  }

  isReadyToSwitch() {
    if (this.userSetIndex.preview === null || !this.isForwarded.program) {
      return false;
    }

    return true;
  }

  private acceptUser(login: string) {
    // Re-forward preview user set to SDI in case of change
    this.constructUserSets();

    if (this.userSetIndex.preview === this.userSets.length - 1) {
      this.putUserSetToPreview(this.userSetIndex.preview);
    }
  }

  private reforwardSlotOnUserRemoval(changedUserSetIndex: number, program: boolean): void {
    var slotName = this.getSlotName(program);

    if (this.userSetIndex[slotName] > this.userSets.length) {
      // User set removed
      this.putUserSetToSlot(null, program);
    } else if (changedUserSetIndex === this.userSetIndex[slotName]) {
      // Slot user set changed
      this.putUserSetToSlot(changedUserSetIndex, program);
    }
  }

  private putUserSetToSlot(index: number, program: boolean) {
    var slotName = this.getSlotName(program);

    if (index === this.userSetIndex[slotName]) {
      return;
    }

    var userSet: IUser[] = [];

    if (index !== null) {
      userSet = this.userSets[index];
    }

    this.userSetIndex[slotName] = index;
    this.isForwarded[slotName] = false;

    var videoPorts = this.config.janus.sdiPorts[this.name].video[slotName];

    var logins: string[] = new Array(this.userSetSize);

    userSet.forEach((user: IUser, userIndex: number) => {
      logins[userIndex] = user.login;
    });

    // TODO: move to base controller
    this.videoRoom.forwardRemoteFeeds(logins, videoPorts).then(() => {
      this.isForwarded[slotName] = true;

      // Forwarding succeeded, changing titles
      logins.forEach((login: string, loginIndex: number) => {
        this.videoRoom.changeRemoteFeedTitle(login || '', videoPorts[loginIndex]);
      });
    }, () => {
      var error = 'Failed forwarding feed to SDI';
      this.toastr.error(error);
      console.error(error);
    });
  }

  private getSlotName(program: boolean): string {
    var slotName = program ? 'program' : 'preview';
    return slotName;
  }

  private getUserSetIndexForUser(login: string): number {
    var user = this.usersByLogin[login];

    this.userSets.forEach((userSet: IUser[], userSetIndex: number) => {
      if (userSet.indexOf(user) !== -1) {
        return userSetIndex;
      }
    });

    return null;
  }

  private constructUserSets(): void {
    this.userSets = [];

    var userSet: IUser[] = [];
    var onlineUsers = this.getOnlineUsers();
    onlineUsers.forEach((user: IUser, index: number) => {
      userSet.push(user);
      if (userSet.length === this.userSetSize || index === onlineUsers.length - 1) {
        this.userSets.push(userSet);
        userSet = [];
      }
    });
  }

  private attachStreamingHandle(slotElement: HTMLMediaElement, streamId: string) {
    this.streaming
      .attachStreamingHandle(streamId)
      .then((stream: MediaStream) => {
        attachMediaStream(slotElement, stream);
      });
  }
}
