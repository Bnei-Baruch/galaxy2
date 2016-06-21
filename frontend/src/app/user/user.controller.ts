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
    switch (message.message) {
      case 'toggleAudio':
        this.videoRoom.toggleLocalAudio(message.enabled);
        break;
      case 'reload':
        this.reload();
        break;
    }
  }

  onAdminMessage(message: any) {
    // Shidur user is a special case we wish to ignore
    if (this.authService.user.login === 'shidur') { return; }

    switch (message.message) {
      case 'reload':
        if (!message.channel || message.channel === this.authService.user.channel) {
          this.reload();
        }
        break;
    }

  }

  reload() {
    this.toastr.info('Admin asked us to reload');
    window.location.reload();
  }

}

