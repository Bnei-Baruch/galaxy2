import { JanusStreamingService } from '../components/janus/janusStreaming.service';

declare var Janus: any;

export class FakeSDIController {
  streaming: JanusStreamingService;
  ports: { [port: number]: string };

  /* @ngInject */
  constructor ($injector: any, $timeout: ng.ITimeoutService, private toastr: any, private config: any) {
    this.streaming = $injector.get('streaming');
    this.ports = {};

    angular.element(document).ready(() => {
      for (var name in config.janus.videoRoom.sdiPorts) {
        if (config.janus.videoRoom.sdiPorts.hasOwnProperty(name)) {
          var video = config.janus.videoRoom.sdiPorts[name].video.program;
          var streamId = config.janus.videoRoom.sdiPorts[name].video.streamId;
          this.ports[video] = streamId;
        }
      }
    });
  }

  onVideo(port: number, streamId: string) {
    var sourceMedia = <HTMLMediaElement>angular.element('video').get(-1);
    this.streaming.attachStreamingHandle(streamId).then((stream: MediaStream) => {
      Janus.attachMediaStream(sourceMedia, stream);
    });
  }
}
