import { JanusService } from './janus.service';

/* @ngInject */
export class JanusStreamingService {
  pluginHandles: any[] = [];

  constructor(private $q: ng.IQService,
      private $log: ng.ILogService,
      private janus: JanusService,
      private toastr: any, $rootScope: ng.IRootScopeService) {

    $rootScope.$on('janus.destroy', () => {
      this.pluginHandles.forEach((handle: any) => {
        var body = { request: 'stop' };
        handle.send({ message: body});
        handle.hangup();
      });
    });
  }

  attachStreamingHandle(streamId: string): ng.IPromise<MediaStream> {
    var deffered = this.$q.defer();
    var streaming;

    this.janus.initialized.then(() => {
      this.janus.session.attach({
        plugin: 'janus.plugin.streaming',
        success: (pluginHandle: any) => {
          streaming = pluginHandle;
          this.pluginHandles.push(streaming);
          var body = { request: 'watch', id: streamId };
          streaming.send({'message': body});
        },
        error: (error: any) => {
          var errorMessage = 'Error attaching plugin: ' + error;
          this.toastr.error(errorMessage);
          deffered.reject(errorMessage);
        },
        onmessage: (msg: any, jsep: any) => {
          this.onStreamingMessage(streaming, msg, jsep);
        },
        onremotestream: (stream: MediaStream) => {
          this.$log.debug('Got a remote stream!', stream);
          deffered.resolve(stream);
        },
        oncleanup: () => {
          this.$log.debug('Got a cleanup notification');
        }
      });
    });

    return deffered.promise;
  }

  onStreamingMessage(handle: any, msg: any, jsep: any) {
    this.$log.debug('Got a message', msg);

    if (jsep !== undefined && jsep !== null) {
      this.$log.debug('Handling SDP as well...', jsep);

      // Answer
      handle.createAnswer({
        jsep: jsep,
        media: { audioSend: false, videoSend: false },  // We want recvonly audio/video
        success: (jsep: any) => {
          this.$log.log('Got SDP!');
          this.$log.log(jsep);
          var body = { 'request': 'start' };
          handle.send({'message': body, 'jsep': jsep});
        },
        error: (error: any) => {
          this.toastr.error('WebRTC error: ' + error);
        }
      });
    }
  }

}
