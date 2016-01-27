import { IUser } from '../../../shidur/shidur.service';
import { BaseChannelController } from '../channel.controller';

declare var attachMediaStream: any;

/** @ngInject */
export class SmallChannelController extends BaseChannelController {
  userSetSize: number = 4;
  firstJoined: boolean = false;
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

  private constructUserSets(): void {
    this.userSets = [];

    var userSet: IUser[] = [];
    var onlineUsers = this.getOnlineUsers();
    onlineUsers.forEach((user: IUser, index: number) => {
      userSet.push(user);
      if (userSet.length === this.userSetSize || index === onlineUsers.length - 1) {
        this.userSets.push(userSet);
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
