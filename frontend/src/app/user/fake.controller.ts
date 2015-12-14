import { JanusVideoRoomService } from '../components/janusVideoRoom/janusVideoRoom.service';


export class FakeUserController {
  fakeUsers: string[];

  /* @ngInject */
  constructor ($timeout: any, $http: ng.IHttpService, toastr: any, config: any) {
    this.fakeUsers = ['afula', 'haifa', 'eilat', 'naharia', 'moscow'];

    $timeout(() => {
      this.fakeUsers.forEach((login: string) => {
        var videoElement = <HTMLVideoElement>document.querySelector(`video[data-login="${login}"]`);
        var janusService = new JanusVideoRoomService($http, toastr, config);
        janusService.registerUser(login, videoElement);
      });
    });
  }
}
