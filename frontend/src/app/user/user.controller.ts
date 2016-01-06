import { AuthService } from '../components/auth/auth.service';
import { PubSubService } from '../components/pubSub/pubSub.service';
import { JanusVideoRoomService } from '../components/janusVideoRoom/janusVideoRoom.service';

declare var attachMediaStream: any;

export class UserController {
  public toastr: any;
  janus: JanusVideoRoomService;

  /* @ngInject */
  constructor (janus: JanusVideoRoomService, toastr: any, authService: AuthService, pubSub: PubSubService) {
    this.toastr = toastr;
    this.janus = janus;

    pubSub.client.subscribe('/users/' + authService.user.login, (message: any) => {
      this.onMessage(message);
    });

    var mediaElement = <HTMLMediaElement>document.querySelector('#localVideo');
    this.janus.registerLocalUser(authService.user.login, (stream: MediaStream) => {
      attachMediaStream(mediaElement, stream);
    });
  }

  onMessage(message: any) {
    if (message.message === 'toggleAudio') {
      this.janus.toggleLocalAudio(message.enabled);
    }
  }
}

