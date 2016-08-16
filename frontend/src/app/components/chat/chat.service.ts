import { JanusTextRoomService } from '../janus/janusTextRoom.service';
import { AuthService } from '../auth/auth.service';

/** @ngInject */
export class ChatService {
  modalInitialized: ng.IPromise<any>;
  messages: any[];
  showing: boolean;

  constructor(private $rootScope: ng.IRootScopeService,
              private $timeout: ng.ITimeoutService,
              private $log: ng.ILogService,
              private $mdDialog: angular.material.IDialogService,
              private authService: AuthService,
              private textRoom: JanusTextRoomService,
              private toastr: any) {
    this.messages = [];
    this.showing = false;
    this.$rootScope.$on('chat.message', (event: any, message: any) => {
      this.onMessage(message);
    });
  }

  start() {
    if (!this.showing) {
      this.showing = true;
      console.log(this.messages);
      this.$mdDialog.show({
        clickOutsideToClose: true,
        locals: {
          messages: this.messages,
          login: this.authService.user.login
        },
        templateUrl: 'app/components/chat/chat.modal.html',
        controller: 'ChatDialogController',
        controllerAs: 'dialog',
        onRemoving: () => { this.showing = false; }
      });
    }
  }

  send(text: string) {
    this.textRoom.sendMessage(this.authService.user.login, text).then(() => {
      this.$log.debug('Chat message sent:', text);
    });
  }

  private onMessage(message: any) {
    this.$log.debug('Message arrived:', message);
    if ((message.from && message.from.indexOf('bb_shidur') !== -1) ||
        message.from === this.authService.user.login) {
      this.$timeout(() => {
        this.messages.push(message);
        this.start();
      });
    }
  }

}
