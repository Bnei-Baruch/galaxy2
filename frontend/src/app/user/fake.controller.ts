import { AuthService } from '../components/auth/auth.service';
import { JanusService } from '../components/janus/janus.service';
import { JanusVideoRoomService } from '../components/janus/janusVideoRoom.service';
import { PublisherStatusTrackerService } from '../components/janus/publisherStatusTracker.service';
import { PubSubService } from '../components/pubSub/pubSub.service';

declare var Janus: any;

/* @ngInject */
export class FakeUserController {
  fakeUsers: string[];

  $window: ng.IWindowService;
  $q: ng.IQService;
  $rootScope: ng.IRootScopeService;
  $timeout: ng.ITimeoutService;
  $log: ng.ILogService;
  $http: ng.IHttpService;
  authService: AuthService;
  pubSub: PubSubService;
  toastr: any;
  config: any;
  $injector: any;
  videoRooms: { [login: string]: JanusVideoRoomService } = {};
  streams: { [login: string]: MediaStream } = {};

  constructor ($window: ng.IWindowService,
               $q: ng.IQService,
               $rootScope: ng.IRootScopeService,
               $timeout: ng.ITimeoutService,
               $log: ng.ILogService,
               $http: ng.IHttpService,
               authService: AuthService,
               pubSub: PubSubService,
               toastr: any,
               config: any,
               $injector: any) {
    this.$window = $window;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.$log = $log;
    this.$http = $http;
    this.authService = authService;
    this.pubSub = pubSub;
    this.toastr = toastr;
    this.config = config;
    this.$injector = $injector;

    // this.fakeUsers = ['afula'];
    this.fakeUsers = ['afula', 'kaliningrad', 'kiev'];
    // this.fakeUsers = ['ashdod', 'arava', 'afula', 'arad'];
    // this.fakeUsers = ['ashdod', 'arava', 'eilat', 'afula', 'naharia', 'ashkelon', 'arad'];
    // this.fakeUsers = ['afula', 'arad', 'guadalajara', 'dnepropetrovsk', 'krasnodar', 'krasnoyarsk'];

    $timeout(() => {
      this.fakeUsers.forEach((login: string) => {
        this.reload(login);
      });
    });
  }

  reload(login: string) {
    console.log('Reloading', login);
    var mediaElement = <HTMLMediaElement>document.querySelector(`video[data-login="${login}"]`);

    var janus = new JanusService(this.$q, this.$rootScope, this.$timeout, this.$log, this.toastr, this.config);
    var publisherStatus = new PublisherStatusTrackerService(this.$injector);
    this.videoRooms[login] = new JanusVideoRoomService(
        this.$window, this.$q, this.$log, this.$timeout, this.$http, this.authService,
        janus, publisherStatus, this.pubSub, this.toastr, this.config);

    this.videoRooms[login].registerLocalUser(login, (stream: MediaStream) => {
      this.$log.debug('Attaching media stream for the fake user', login);
      Janus.attachMediaStream(mediaElement, stream);
      this.streams[login] = stream;
    });
  }

  unpublish(login: string) {
    this.videoRooms[login].unpublishLocalFeed();
    if (this.streams[login].stop) {
      this.streams[login].stop();
    } else {
      this.streams[login].getTracks().forEach((mst: MediaStreamTrack) => { mst.stop(); });
    }
    delete this.videoRooms[login];
    delete this.streams[login];
  }
}
