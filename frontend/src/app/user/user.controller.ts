import { JanusVideoRoomService } from '../components/janusVideoRoom/janusVideoRoom.service';


export class UserController {
  public toastr: any;
  janus: JanusVideoRoomService;

  /* @ngInject */
  constructor (janus: JanusVideoRoomService, toastr: any) {
    this.toastr = toastr;
    this.janus = janus;

    var mediaElement = <HTMLMediaElement>document.querySelector('#localVideo');
    this.janus.registerLocalUser('arad', (stream) => {
      attachMediaStream(mediaElement, stream);
    });
  }
}

