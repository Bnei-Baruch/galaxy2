import {PubSubService} from '../components/pubSub/pubSub.service';

export class AdminController {

  /* @ngInject */
  constructor(private pubSub:PubSubService,
              private $log:ng.ILogService,
              private $http:ng.IHttpService,
              private config:any,
              private toastr:any) {
  }

  reloadAllUsers() {
    this.pubSub.client.publish('/admin', {
      message: 'reload'
    }).then(() => {
      this.toastr.info('Reloading all users');
    }, (error:any) => {
      this.toastr.error('Error reloading all users');
    });
  }

  restartSDI() {
    this.$log.warn('Restarting GStreamer SDI');

    var url = 'https://v4g.kbb1.com:8080/restart/';
    this.$http.post(url, {})
      .error((data:any, st:any) => {
        this.$log.error('Restarting GStreamer SDI', data, st);
      });
  }

  restartFours() {
    this.$log.warn('Restarting GStreamer Fours');

    var url = 'https://v4g.kbb1.com:8081/restart/';
    this.$http.post(url, {})
      .error((data:any, st:any) => {
        this.$log.error('Restarting GStreamer Fours', data, st);
      });
  }

}

