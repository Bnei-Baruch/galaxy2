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

    this.videoRoom.registerLocalUser(authService.user.login, (stream: MediaStream) => {
      var mediaElement = <HTMLMediaElement>document.querySelector('#localVideo');
      Janus.attachMediaStream(mediaElement, stream);
    });

    Janus.listDevices((devices: IMediaDeviceInfo[]) => {
      console.log('Janus.listDevices:', devices);

      var lsCamera = localStorage.getItem('selectedCamera');
      console.log('localStorage.selectedCamera:', lsCamera);

      this.cameras = devices.filter((d: IMediaDeviceInfo) => d.kind === 'videoinput') || [];

      if (lsCamera && this.cameras.find((d: IMediaDeviceInfo) => d.deviceId === lsCamera)) {
        console.log('Using device from localStorage:', lsCamera);
        this.selectedCamera = lsCamera;
      } else if (this.cameras.length > 0) {
        console.log('No device set in localStorage or not found:', lsCamera);
        console.log('Using default:', this.cameras[0].deviceId);
        this.selectedCamera = this.cameras[0].deviceId;
      } else {
        console.error('No videoinput device found !!!');
      }

      console.log('Final selectedCamera:', this.selectedCamera);
      this.videoRoom.setDevice(this.selectedCamera);
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

