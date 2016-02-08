declare var Janus: any;

/* @ngInject */
export class JanusService {
  $rootScope: ng.IRootScopeService;
  $q: ng.IQService;
  $timeout: ng.ITimeoutService;
  config: any;
  toastr: any;
  session: any;

  initialized: boolean = false;

  constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, toastr: any, config: any) {
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.config = config;
    this.toastr = toastr;

    if (!Janus.isWebrtcSupported()) {
      toastr.error('No WebRTC support... ');
      return;
    }

    $rootScope.$on('janus.initialized', () => {
      this.initialized = true;
    });

    Janus.init({
      debug: true,
      callback: () => {
        this.initCallback();
      }
    });

  }

  waitForInitialization() {
    var deffered = this.$q.defer();

    if (this.initialized) {
      deffered.resolve();
    } else {
      this.$rootScope.$on('janus.initialized', () => {
        deffered.resolve();
      });
    }

    return deffered.promise;
  }

  // Called once at constructor
  private initCallback(): void {
    this.session = new Janus({
      server: this.config.janus.serverUri,
      success: () => {
        this.$rootScope.$broadcast('janus.initialized');

        $(window).on('beforeunload', () => {
          this.$rootScope.$broadcast('janus.destroy');
          this.session.destroy();
          // return "Are you sure want to leave this page?";
        });
      },
      error: (error: any) => {
        this.toastr.error(`Janus creation error: ${error}`);
        this.reloadAfterTimeout();
      }
    });
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
