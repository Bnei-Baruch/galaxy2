import { AuthService } from '../components/auth/auth.service';
import { PubSubService } from '../components/pubSub/pubSub.service';
import { JanusVideoRoomService } from '../components/janus/janusVideoRoom.service';

declare var attachMediaStream: any;

export class UserController {
  public toastr: any;
  janus: JanusVideoRoomService;

  /* @ngInject */
  constructor (videoRoom: JanusVideoRoomService, toastr: any, authService: AuthService, pubSub: PubSubService) {
    this.toastr = toastr;
    this.janus = videoRoom;

    pubSub.client.subscribe('/users/' + authService.user.login, (message: any) => {
      this.onMessage(message);
    });

    pubSub.client.subscribe('/admin', (message: any) => {
      this.onAdminMessage(message);
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

  onAdminMessage(message: any) {
    if (message.message === 'reload') {
      this.toastr.info('Got a reload message from admin, reloading...');
      window.location.reload();
    }
  }

}

