import { AuthService } from '../components/auth/auth.service';
import { JanusVideoRoomService } from '../components/janusVideoRoom/janusVideoRoom.service';

declare var attachMediaStream: any;

export class UserController {
  public toastr: any;
  janus: JanusVideoRoomService;

  /* @ngInject */
  constructor (janus: JanusVideoRoomService, toastr: any, authService: AuthService) {
    this.toastr = toastr;
    this.janus = janus;

    var mediaElement = <HTMLMediaElement>document.querySelector('#localVideo');
    this.janus.registerLocalUser(authService.user.login, (stream) => {
      attachMediaStream(mediaElement, stream);
    });
  }
}

