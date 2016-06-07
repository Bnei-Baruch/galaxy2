import { AuthService } from '../components/auth/auth.service';
import { JanusService } from '../components/janus/janus.service';
import { JanusVideoRoomService } from '../components/janus/janusVideoRoom.service';
import { PublisherStatusTrackerService } from '../components/janus/publisherStatusTracker.service';

declare var attachMediaStream: any;

/* @ngInject */
export class FakeUserController {
  fakeUsers: string[];

  constructor ($q: ng.IQService,
      $rootScope: ng.IRootScopeService,
      $timeout: ng.ITimeoutService,
      $log: ng.ILogService,
      $http: ng.IHttpService,
      authService: AuthService,
      toastr: any,
      config: any) {

    this.fakeUsers = ['ashdod', 'arava', 'eilat', 'afula', 'naharia', 'ashkelon', 'arad'];
    // this.fakeUsers = ['afula', 'arad', 'guadalajara', 'dnepropetrovsk', 'krasnodar', 'krasnoyarsk'];

    $timeout(() => {
      this.fakeUsers.forEach((login: string, userIndex: number) => {
        var mediaElement = <HTMLMediaElement>document.querySelector(`video[data-login="${login}"]`);

        var janus = new JanusService($q, $rootScope, $timeout, $log, toastr, config);
        var publisherStatus = new PublisherStatusTrackerService('ashdod');
        var videoRoom = new JanusVideoRoomService($q, $log, $timeout, $http, authService, janus, toastr, config);

        videoRoom.registerLocalUser(login, (stream: MediaStream) => {
          $log.debug('Attaching media stream for the fake user', login);
          attachMediaStream(mediaElement, stream);
        });

      });
    });
  }
}

