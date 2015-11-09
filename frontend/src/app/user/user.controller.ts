import { JanusVideoRoomService } from '../components/janusVideoRoom/janusVideoRoom.service';


export class UserController {
  public toastr: any;
  janus: JanusVideoRoomService;

  /* @ngInject */
  constructor (janus: JanusVideoRoomService, toastr: any) {
    this.toastr = toastr;
    this.janus = janus;

    this.janus.registerUser('haifa', document.querySelector('#localVideo'));
  }
}

