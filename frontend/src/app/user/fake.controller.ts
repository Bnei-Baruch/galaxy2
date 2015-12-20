import { JanusVideoRoomService } from '../components/janusVideoRoom/janusVideoRoom.service';

declare var attachMediaStream: any;

export class FakeUserController {
  fakeUsers: string[];

  /* @ngInject */
  constructor ($q: ng.IQService, $timeout: ng.ITimeoutService, $http: ng.IHttpService, toastr: any, config: any) {
    this.fakeUsers = ['afula', 'haifa', 'eilat', 'naharia', 'moscow'];

    $timeout(() => {
      this.fakeUsers.forEach((login: string) => {
        var mediaElement = <HTMLMediaElement>document.querySelector(`video[data-login="${login}"]`);
        var janusService = new JanusVideoRoomService($q, $timeout, $http, toastr, config);
        janusService.registerLocalUser(login, (stream) => {
          attachMediaStream(mediaElement, stream);
        });
      });
    });
  }
}

