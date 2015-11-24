import { JanusVideoRoomService } from '../components/janusVideoRoom/janusVideoRoom.service';


export class FakeUserController {
  public toastr: any;
  fakeUsers: string[];
  janus: JanusVideoRoomService;

  /* @ngInject */
  constructor ($timeout: any, janus: JanusVideoRoomService, toastr: any) {
    this.toastr = toastr;
    this.janus = janus;

    this.fakeUsers = ['afula', 'haifa', 'eilat', 'naharia', 'raanana', 'rehovot'];

    $timeout(() => {
      this.fakeUsers.forEach((login: string) => {
        var mediaElement = document.querySelector(`video[data-login="${login}"]`);
        this.janus.registerUser(login, mediaElement);
      });
    });
  }
}

