import { AuthService } from '../components/auth/auth.service';
import { PubSubService } from '../components/pubSub/pubSub.service';
import { JanusVideoRoomService } from '../components/janus/janusVideoRoom.service';
import { ChatService } from '../components/chat/chat.service';

declare var Janus: any;
interface IMediaDeviceInfo {
  deviceId: string;
  kind: string;
  label: string;
};

export class UserController {

  selectedCamera: string;
  cameras: IMediaDeviceInfo[];

  /* @ngInject */
  constructor (pubSub: PubSubService,
               private videoRoom: JanusVideoRoomService,
               private authService: AuthService,
               private chat: ChatService,
               private toastr: any) {
    pubSub.client.subscribe('/users/' + authService.user.login, (message: any) => {
      this.onMessage(message);
    });

    pubSub.client.subscribe('/admin', (message: any) => {
      this.onAdminMessage(message);
    });

    var mediaElement = <HTMLMediaElement>document.querySelector('#localVideo');

    Janus.listDevices((devices: IMediaDeviceInfo[]) => {
      this.cameras = devices.filter((d: IMediaDeviceInfo) => d.kind === 'videoinput');
      if (localStorage.getItem('selectedCamera') &&
          this.cameras.find((d: IMediaDeviceInfo) => d.deviceId === localStorage.getItem('selectedCamera'))) {
        this.selectedCamera = localStorage.getItem('selectedCamera');
      } else if (this.cameras.length) {
        this.selectedCamera = this.cameras[0].deviceId;
      }

      if (this.selectedCamera) {
        this.videoRoom.setDevice(this.selectedCamera);
        this.videoRoom.registerLocalUser(authService.user.login, (stream: MediaStream) => {
          Janus.attachMediaStream(mediaElement, stream);
        });
      }
    });
  }

  cameraSelected() {
    localStorage.setItem('selectedCamera', this.selectedCamera);
    // Disconnect and connect again.
    this.toastr.info('Reloading with different video input device!');
    window.location.reload();
  }

  onMessage(message: any) {
    switch (message.message) {
      case 'toggleAudio':
        // Don't toggle audio, we want to keep it always true and control from SDI.
        // this.videoRoom.toggleLocalAudio(message.enabled);
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

