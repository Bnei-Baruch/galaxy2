import { BaseChannelController } from '../channel.controller';

declare var attachMediaStream: any;

/** @ngInject */
export class SmallChannelController extends BaseChannelController {
  firstJoined: boolean = false;

  userJoined(login: string) {
    super.userJoined(login);

    if (!this.firstJoined) {
      this.firstJoined = true;

      var channelConfig = this.config.janus.sdiPorts[this.name];
      var previewElement = this.getMediaElement('.preview');

      this.streaming
        .attachStreamingHandle(channelConfig.streamIds.preview)
        .then((stream: MediaStream) => {
          attachMediaStream(previewElement, stream);
        });
    }
  }

  userLeft(login: string) {
    super.userLeft(login);
  }

}
