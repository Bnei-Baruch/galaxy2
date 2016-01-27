import { BaseChannelController } from '../channel.controller';

declare var attachMediaStream: any;

/** @ngInject */
export class SmallChannelController extends BaseChannelController {
  firstJoined: boolean = false;

  userJoined(login: string) {
    super.userJoined(login);

    if (!this.firstJoined) {
      this.firstJoined = true;

      var streamIds = this.config.janus.sdiPorts[this.name].streamIds;
      this.attachStreamingHandle('.program', streamIds.program);
      this.attachStreamingHandle('.preview', streamIds.preview);
    }
  }

  userLeft(login: string) {
    super.userLeft(login);
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
