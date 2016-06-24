import { AuthService } from '../components/auth/auth.service';
import { PubSubService } from '../components/pubSub/pubSub.service';
import { JanusVideoRoomService } from '../components/janus/janusVideoRoom.service';

declare var attachMediaStream: any;

export class UserController {

  /* @ngInject */
  constructor (pubSub: PubSubService,
               private videoRoom: JanusVideoRoomService,
               private toastr: any,
               private authService: AuthService) {

    pubSub.client.subscribe('/users/' + authService.user.login, (message: any) => {
      this.onMessage(message);
    });

    pubSub.client.subscribe('/admin', (message: any) => {
      this.onAdminMessage(message);
    });

    var mediaElement = <HTMLMediaElement>document.querySelector('#localVideo');
    this.videoRoom.registerLocalUser(authService.user.login, (stream: MediaStream) => {
      attachMediaStream(mediaElement, stream);
    });
  }

  onMessage(message: any) {
    if (message.message === 'toggleAudio') {
      this.videoRoom.toggleLocalAudio(message.enabled);
    }
  }

  onAdminMessage(message: any) {
    if (message.message === 'reload' &&
        (!message.channel || message.channel === this.authService.user.channel)) {
      this.toastr.info('Got a reload message from admin, reloading...');
      window.location.reload();
    }
  }

}

