import { IUser } from '../../../shidur/shidur.service';
import { BaseChannelController } from '../channel.controller';

declare var attachMediaStream: any;

/** @ngInject */
export class SmallChannelController extends BaseChannelController {
  firstJoined: boolean = false;

  userSetIndex: { program: number, preview: number } = {
    program: null,
    preview: null
  };

  userSetSize: number = 4;
  userSets: IUser[][];

  userJoined(login: string) {
    super.userJoined(login);

    if (!this.firstJoined) {
      this.firstJoined = true;

      var streamIds = this.config.janus.sdiPorts[this.name].streamIds;
      this.attachStreamingHandle('.program', streamIds.program);
      this.attachStreamingHandle('.preview', streamIds.preview);
    }

    this.constructUserSets();
  }

  userLeft(login: string) {
    super.userLeft(login);
    this.constructUserSets();
  }

  next() {
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

  isReadyToSwitch() {
    if (this.userSetIndex.preview === null || !this.isForwarded.program) {
      return false;
    }

    return true;
  }

  private putUserSetToSlot(index: number, program: boolean) {
    var slotName = program ? 'program' : 'preview';

    if (index === this.userSetIndex[slotName]) {
      return;
    }

    this.userSetIndex[slotName] = index;
    this.isForwarded[slotName] = false;

    var userSet = this.userSets[index];
    var videoPorts = this.config.janus.sdiPorts[this.name].video[slotName];

    var logins = userSet.map((user: IUser) => {
      return user.login;
    });

    this.videoRoom.forwardRemoteFeeds(logins, videoPorts).then(() => {
      this.isForwarded[slotName] = true;

      // Forwarding succeeded, changing titles
      userSet.forEach((user: IUser, userIndex: number) => {
        this.videoRoom.changeRemoteFeedTitle(user.title, videoPorts[userIndex]);
      });
    });
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

  private attachStreamingHandle(cssSelector: string, streamId: string) {
    var slotElement = this.getMediaElement(cssSelector);

    this.streaming
      .attachStreamingHandle(streamId)
      .then((stream: MediaStream) => {
        attachMediaStream(slotElement, stream);
      });
  }
}
