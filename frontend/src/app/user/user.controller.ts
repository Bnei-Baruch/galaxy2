import { JanusVideoRoomService } from '../components/janusVideoRoom/janusVideoRoom.service';


export class UserController {
  public toastr: any;
  janus: JanusVideoRoomService;

  /* @ngInject */
  constructor (janus: JanusVideoRoomService, toastr: any) {
    this.toastr = toastr;
    this.janus = janus;

    var videoElement = <HTMLVideoElement>document.querySelector('#localVideo');
    this.janus.registerUser('arad', videoElement);
  }
}

