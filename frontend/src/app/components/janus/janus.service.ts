declare var Janus: any;

/* @ngInject */
export class JanusService {
  session: any;
  initialized: ng.IPromise<any>;

  constructor(private $q: ng.IQService,
      private $rootScope: ng.IRootScopeService,
      private $timeout: ng.ITimeoutService,
      private $log: ng.ILogService,
      private toastr: any,
      private config: any) {

    this.initialized = this.initialize();
  }

  // Called once at constructor
  private initialize(): ng.IPromise<any> {
    var deffered = this.$q.defer();

    var initCallback = () => {

      if (!Janus.isWebrtcSupported()) {
        this.toastr.error('Sorry, we need your browser to support WebRTC.');
        deffered.reject();
        return deffered.promise;
      }

      this.$log.info('Initializing connection to Janus');
      this.session = new Janus({
        server: this.config.janus.serverUri,
	      iceServers: this.config.janus.iceServers,
        success: () => {
          deffered.resolve();
        },
        error: (error: any) => {
          this.$log.error('Error connecting to Janus', error);
          this.toastr.error('Oops, we can\'t connect to the WebRTC gateway.');
          this.reloadAfterTimeout();
          deffered.reject();
        }
      });
    };

    Janus.init({
      debug: ['log', 'warn', 'error'],
      callback: () => {
        initCallback();
      }
    });

    return deffered.promise;
  }

  private reloadAfterTimeout(counter?: number): void {
    if (counter === undefined) {
      counter = this.config.janus.reconnectTimeout;
    }

    if (counter === 0) {
      window.location.reload();
    } else {
      this.toastr.info(`Reloading the page in ${counter} seconds...`);
      this.$timeout(() => {
        this.reloadAfterTimeout(--counter);
      }, 1000);
    }
  }

}
