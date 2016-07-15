import { JanusService } from './janus.service';

/* @ngInject */
export class JanusTextRoomService {
  pluginHandles: any[] = [];

  constructor(private $q: ng.IQService,
      private $log: ng.ILogService,
      private janus: JanusService,
      private toastr: any) {
  }

  attachTextRoomHandle(): ng.IPromise<MediaStream> {
    var deffered = this.$q.defer();
    var handle;

    this.janus.initialized.then(() => {
      this.$log.info('TextRoom - attach handle');
      this.janus.session.attach({
        plugin: 'janus.plugin.textroom',
        error: (response: any) => {
          this.$log.error('Error attaching text room plugin', response);
          this.toastr.error(`Error attaching text room plugin: ${response}`);
          deffered.reject(response);
        },
        webrtcState: (on: boolean) => {
          var upDown = (on ? 'up' : 'down');
          this.$log(`Data channel WebRTC peer connection is ${upDown}.`);
          this.$rootScope.$broadcast('chat.enabled', on);
        },
        success: (pluginHandle: any) => {
          handle = pluginHandle;
          this.$log.info('Text room plugin attached');

          // Setup the DataChannel
          var body = { request: 'setup' };
          handle.send({ message: body});
        },
        ondataopen: (data: any) => {
          this.$log('The data channel is available, entering the chat room...');
          this.enterChatRoom();
        },

        onmessage: (msg: any, jsep: any) => {
          this.onTextRoomMessage(handle, msg, jsep);
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

  private onTextRoomMessage(handle: any, msg: any, jsep: any) {
      this.$log.debug('Text room - handle message', handle.getId(), msg);

      if (msg.error) {
        this.$log.error(msg.error);
        this.toastr.error(msg.error);
      }

      if (jsep) {
        // Answer
        textroom.createAnswer({
          jsep: jsep,
          media: { audio: false, video: false, data: true },  // We only use datachannels
          success: (jsep: any) => {
            this.$log.info('Text room - got SDP, replying...', handle.getId());
            this.$log.debug(jsep);
            var body = { request: 'ack' };
            textroom.send({ message: body, jsep: jsep});
          },
          error: (error: any) => {
            this.$log.error('Error creating text room SDP answer', error);
            this.toastr.error('WebRTC error: ' + error);
          }
        });
      }
  }

  private enterChatRoom() {
    var transaction = randomString(12);
    var register = {
      textroom: 'join',
      transaction: transaction,
      room: config.janus.textRoom.roomId,
      username: this.authService.user.login,
      display: this.authService.user.title
    };
    transactions[transaction] = function(response) {
      if(response["textroom"] === "error") {
        // Something went wrong
        bootbox.alert(response["error"]);
        $('#username').removeAttr('disabled').val("");
        $('#register').removeAttr('disabled').click(registerUsername);
        return;
      }
      // We're in
      $('#datasend').removeAttr('disabled');
      // Any participants already in?
      console.log("Participants:", response.participants);
      if(response.participants && response.participants.length > 0) {
        for(var i in response.participants) {
          var p = response.participants[i];
          participants[p.username] = p.display ? p.display : p.username;
          if(p.username !== mychatid && $('#rp' + p.username).length === 0) {
            // Add to the participants list
            $('#list').append('<li id="rp' + p.username + '" class="list-group-item">' + participants[p.username].split("_")[0] + '</li>');
            $('#rp' + p.username).css('cursor', 'pointer').click(function() {
              var username = $(this).attr('id').split("rp")[1];
              sendPrivateMsg(username);
            });
          }
        }
      }
    };
    textroom.data({
      text: JSON.stringify(register),
      error: function(reason) {
        bootbox.alert(reason);
        $('#username').removeAttr('disabled').val("");
        $('#register').removeAttr('disabled').click(registerUsername);
      }
    });
  }
}
