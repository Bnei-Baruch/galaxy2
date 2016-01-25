declare var Janus: any;

/* @ngInject */
export class JanusStreamingService {
  $q: ng.IQService;
  session: any;

  constructor($q: ng.IQService, toastr: any, config: any) {
    this.$q = $q;
    this.config = config;
    this.toastr = toastr;

    if (!Janus.isWebrtcSupported()) {
      toastr.error('No WebRTC support... ');
      return;
    }

    Janus.init({
      debug: true,
      callback: () => {
        this.initCallback();
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
