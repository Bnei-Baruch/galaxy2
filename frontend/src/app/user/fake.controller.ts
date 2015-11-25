import { JanusVideoRoomService } from '../components/janusVideoRoom/janusVideoRoom.service';


export class FakeUserController {
  fakeUsers: string[];

  /* @ngInject */
  constructor ($timeout: any, toastr: any, config: any) {
    this.fakeUsers = ['afula', 'haifa', 'eilat', 'naharia', 'raanana', 'rehovot'];

    $timeout(() => {
      this.fakeUsers.forEach((login: string) => {
        var mediaElement = document.querySelector(`video[data-login="${login}"]`);
        var janusService = new JanusVideoRoomService(toastr, config);
        janusService.registerUser(login, mediaElement);
      });
    });
  }
}

