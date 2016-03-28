import { JanusStreamingService } from '../components/janus/janusStreaming.service';

declare var attachMediaStream: any;

export class PlayerController {

  /* @ngInject */
  constructor (private streaming: JanusStreamingService, private toastr: any) {
    var mediaElement = <HTMLMediaElement>document.querySelector('#remoteVideo');
  }

}

