import { IUser } from '../../../shidur/shidur.service';
import { BaseChannelController } from '../channel.controller';

declare var attachMediaStream: any;

/** @ngInject */
export class SmallChannelController extends BaseChannelController {
  firstJoined: boolean = false;
  previewForwarded: boolean = false;

  programUserSetIndex: number = null;
  previewUserSetIndex: number = null;

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
      this.putUserSetToProgram(this.previewUserSetIndex);
      var nextUserSetIndex = (this.previewUserSetIndex + 1) % this.userSetSize;
      this.putUserSetToPreview(nextUserSetIndex);
    }
  }

  putUserSetToProgram(index: number) {
  }

  putUserSetToPreview(index: number) {
    if (index === this.previewUserSetIndex) {
      return;
    }

    this.previewUserSetIndex = index;

    this.previewForwarded = false;
    var userSet = this.userSets[index];
    var sdiPorts = this.config.janus.sdiPorts[this.name].video;

    var forwardPromises = userSet.map((user: IUser, index: number) => {
      return this.videoRoom.forwardRemoteFeed(user.login, sdiPorts[index]);
    });

    this.$q.all(forwardPromises).then((forwardResults: any[]) => {
      this.previewForwarded = true;

      // Forwarding succeeded, changing titles
      forwardResults.forEach((forwardResult: any, forwardResultIndex: number) => {
        var user = userSet[forwardResultIndex];
        var videoPort = sdiPorts.video[forwardResultIndex];
        this.videoRoom.changeRemoteFeedTitle(user.title, videoPort);
      });
    });

  }

  private constructUserSets(): void {
    this.userSets = [];

    var userSet: IUser[] = [];
    // var onlineUsers = this.getOnlineUsers();
    var onlineUsers = this.users;
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
