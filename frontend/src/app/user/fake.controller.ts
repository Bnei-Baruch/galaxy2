import { JanusService } from '../components/janus/janus.service';
import { JanusVideoRoomService } from '../components/janus/janusVideoRoom.service';

declare var attachMediaStream: any;

export class FakeUserController {
  fakeUsers: string[];

  /* @ngInject */
  constructor ($q: ng.IQService,
      $rootScope: ng.IRootScopeService,
      $timeout: ng.ITimeoutService,
      $http: ng.IHttpService,
      janus: JanusService,
      toastr: any,
      config: any) {

    // this.fakeUsers = ['ashdod', 'arava', 'eilat', 'afula', 'naharia', 'ashkelon'];
    this.fakeUsers = ['afula', 'arad', 'guadalajara', 'dnepropetrovsk', 'krasnodar', 'krasnoyarsk'];

    $timeout(() => {
      this.fakeUsers.forEach((login: string) => {
        var mediaElement = <HTMLMediaElement>document.querySelector(`video[data-login="${login}"]`);
        var videoRoom = new JanusVideoRoomService($q, $rootScope, $timeout, $http, janus, toastr, config);
        videoRoom.registerLocalUser(login, (stream: MediaStream) => {
          attachMediaStream(mediaElement, stream);
        });
      });
    });
  }
}

