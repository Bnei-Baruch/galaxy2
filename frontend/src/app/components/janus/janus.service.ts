declare var Janus: any;

/* @ngInject */
export class JanusService {
  session: any;
  initialized: ng.IPromise<any>;

  constructor(private $q: ng.IQService,
      private $rootScope: ng.IRootScopeService,
      private $timeout: ng.ITimeoutService,
      private toastr: any,
      private config: any) {

    if (!Janus.isWebrtcSupported()) {
      toastr.error('No WebRTC support... ');
      return;
    }

    this.initialized = this.initialize();

  }

  // Called once at constructor
  private initialize(): ng.IPromise<any> {
    var deffered = this.$q.defer();

    var initCallback = () => {
      this.session = new Janus({
        server: this.config.janus.serverUri,
        success: () => {
          deffered.resolve();

          $(window).on('beforeunload', () => {
            this.$rootScope.$broadcast('janus.destroy');
            this.session.destroy();
            // return "Are you sure want to leave this page?";
          });
        },
        error: (error: any) => {
          this.toastr.error(`Janus creation error: ${error}`);
          this.reloadAfterTimeout();
          deffered.reject();
        }
      });
    };

    Janus.init({
      debug: true,
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
