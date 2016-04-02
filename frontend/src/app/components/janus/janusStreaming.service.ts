import { JanusService } from './janus.service';

/* @ngInject */
export class JanusStreamingService {
  pluginHandles: any[] = [];

  constructor(private $q: ng.IQService,
      private $log: ng.ILogService,
      private janus: JanusService,
      private toastr: any, $rootScope: ng.IRootScopeService) {
    $rootScope.$on('janus.destroy', () => this.onJanusDestroy());
  }

  attachStreamingHandle(streamId: string): ng.IPromise<MediaStream> {
    var deffered = this.$q.defer();
    var handle;

    this.janus.initialized.then(() => {
      this.$log.info('Streaming - attach handle', streamId);
      this.janus.session.attach({
        plugin: 'janus.plugin.streaming',
        success: (pluginHandle: any) => {
          handle = pluginHandle;
          this.pluginHandles.push(handle);

          this.$log.info('Streaming - watch', streamId);
          handle.send({
            'message': {request: 'watch', id: streamId},
            error: (response) => this.$log.error('Error watching streaming handle', response)
          });
        },
        error: (response: any) => {
          this.$log.error('Error attaching streaming plugin', response);
          this.toastr.error(`Error attaching streaming plugin: ${response}`);
          deffered.reject(response);
        },
        onmessage: (msg: any, jsep: any) => {
          this.onStreamingMessage(handle, msg, jsep);
        },
        onremotestream: (stream: MediaStream) => {
          this.$log.info('Streaming - handle onremotestream', streamId, stream);
          deffered.resolve(stream);
        },
        oncleanup: () => {
          this.$log.info('Streaming - handle oncleanup', streamId);
        }
      });
    });

    return deffered.promise;
  }

  onStreamingMessage(handle: any, msg: any, jsep: any) {
    this.$log.debug('Streaming - handle message', handle.getId(), msg);

    if (jsep !== undefined && jsep !== null) {
      this.$log.info('Streaming - Creating answer', handle.getId());
      this.$log.debug(jsep);

      //noinspection TypeScriptValidateJSTypes
      handle.createAnswer({
        jsep: jsep,
        media: { audioSend: false, videoSend: false },  // We want recvonly audio/video
        success: (jsep: any) => {
          this.$log.info('Streaming - got SDP, starting...', handle.getId());
          this.$log.debug(jsep);
          handle.send({
            'message': {'request': 'start'},
            'jsep': jsep,
            error: (response) => this.$log.error('Error starting streaming SDP answer', response)
          });
        },
        error: (response) => {
          this.$log.error('Error creating streaming SDP answer', response);
          this.toastr.error('WebRTC error: ' + response);
        }
      });
    }
  }

  onJanusDestroy(){
    this.pluginHandles.forEach((handle: any) => {
      this.$log.info('Stopping streaming handle', handle.getId());
      handle.send({
        message: {request: 'stop'},
        error: (response) => this.$log.error('Error stopping streaming handle', response)
      });

      this.$log.info('Hanging up streaming handle', handle.getId());
      handle.hangup();
    });
  }

}
