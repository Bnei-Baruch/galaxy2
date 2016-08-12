import { JanusService } from './janus.service';
import { AuthService } from '../auth/auth.service';

/* @ngInject */
export class JanusTextRoomService {
  pluginHandles: any[] = [];
  initialized: ng.IPromise<any>;
  handle: any;  // Janus handle instance.

  constructor(private $q: ng.IQService,
              private $log: ng.ILogService,
              private $rootScope: ng.IRootScopeService,
              private janus: JanusService,
              private authService: AuthService,
              private config: any,
              private toastr: any) {

      this.initialized = this.attachTextRoomHandle();
  }

  attachTextRoomHandle(): ng.IPromise<any> {
    var deferred = this.$q.defer();

    this.janus.initialized.then(() => {
      this.$log.info('TextRoom - attach handle');
      this.janus.session.attach({
        plugin: 'janus.plugin.textroom',
        error: (response: any) => {
          this.$log.error('Error attaching text room plugin', response);
          this.toastr.error(`Error attaching text room plugin: ${response}`);
          deferred.reject(response);
        },
        webrtcState: (on: boolean) => {
          var upDown = (on ? 'up' : 'down');
          this.$log.info(`Data channel WebRTC peer connection is ${upDown}.`);
          this.$rootScope.$broadcast('chat.enabled', on);
        },
        success: (pluginHandle: any) => {
          this.handle = pluginHandle;
          this.$log.info('Text room plugin attached');

          // Setup the DataChannel
          var body = { request: 'setup' };
          this.handle.send({ message: body});
        },
        onmessage: (msg: any, jsep: any) => {
          this.onTextRoomMessage(msg, jsep);
        },
        ondataopen: (data: any) => {
          this.$log.info('The data channel is available, entering the chat room...');
          this.tryEnterChatRoom(deferred);
        },
        ondata: (dataString: any) => {
          var data = JSON.parse(dataString);
          // Handle room join
          if (data.transaction === 'join') {
            if (data.textroom === 'error') {
              deferred.reject(data.error);
            } else {
              deferred.resolve();
            }
          }

          // Handle on chat message sent.
          if (data.textroom === 'message') {
            console.log('chat message received', data);
            this.$rootScope.$broadcast('chat.message', data);
          }
        },
        oncleanup: () => {
          this.$log.info('Streaming - handle oncleanup');
        }
      });
    });

    return deferred.promise;
  }

  sendMessage(login: string, text: string) {
    var deferred = this.$q.defer();

    this.initialized.then(() => {
      var message = {
        textroom: 'message',
        transaction: 'message_sent',
        room: this.config.janus.textRoom.roomId,
        // to: login,
        text: text
      };

      this.handle.data({
        text: JSON.stringify(message),
        error: (reason: any) => {
          this.$log.error('Error trying to send message', reason);
          this.toastr.error('Unable to send message.');
          deferred.reject(reason);
        },
        success: () => {
          deferred.resolve();
        }
      });
    });

    return deferred.promise;
  }

  private onTextRoomMessage(msg: any, jsep: any) {
      this.$log.debug('Text room - handle message', this.handle.getId(), msg);

      if (msg.error) {
        this.$log.error(msg.error);
        this.toastr.error(msg.error);
      }

      if (jsep) {
        // Answer
        this.handle.createAnswer({
          jsep: jsep,
          media: { audio: false, video: false, data: true },  // We only use datachannels
          success: (jsep: any) => {
            this.$log.info('Text room - got SDP, replying...', this.handle.getId());
            this.$log.debug(jsep);
            var body = { request: 'ack' };
            this.handle.send({ message: body, jsep: jsep});
          },
          error: (error: any) => {
            this.$log.error('Error creating text room SDP answer', error);
            this.toastr.error('WebRTC error: ' + error);
          }
        });
      }
  }

  private tryEnterChatRoom(deferred: ng.IDeferred<any>) {
    var register = {
      textroom: 'join',
      transaction: 'join',  // See if this workf without specifying transaction.
      room: this.config.janus.textRoom.roomId,
      username: this.authService.user.login,
      display: this.authService.user.title
    };
    this.handle.data({
      text: JSON.stringify(register),
      error: (reason: any) => {
        this.$log.error('Error trying to join the chat room', reason);
        this.toastr.error('Unable to join the chat room.');
        deferred.reject();
      }
    });
  }
}
