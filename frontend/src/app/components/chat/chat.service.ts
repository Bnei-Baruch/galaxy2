import { JanusTextRoomService } from '../janus/janusTextRoom.service';
import { AuthService } from '../auth/auth.service';

declare var Notification: any;

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
        templateUrl: 'app/components/chat/chat.dialog.html',
        controller: 'ChatDialogController',
        controllerAs: 'dialog',
        onRemoving: () => { this.showing = false; }
      });
    }
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  send(text: string) {
    this.textRoom.sendMessage(this.authService.user.login, text);
  }

  private onMessage(message: any) {
    if ((message.from && message.from.indexOf('bb_shidur') !== -1) ||
        message.from === this.authService.user.login) {
      this.$timeout(() => {
        if (document[this.getHiddenProp()]) {
          this.notifyMe(message.from, message.text, false);
        }
        this.messages.push(message);
        this.start();
      });
    }
  }

  private notifyMe(title: string, message: string, tout: boolean) {
    if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.');
      return;
    }
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
      /* tslint:disable:no-unused-variable */
      var n = new Notification(title + ':', {
        icon: 'nlogo.png',
        body: message,
        requireInteraction: tout
      });
      /* tslint:enable:no-unused-variable */
    }
  }

  private getHiddenProp() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('hidden' in document) {
      return 'hidden';
    }
    for (var i = 0; i < prefixes.length; i++) {
      if ((prefixes[i] + 'Hidden') in document) {
        return prefixes[i] + 'Hidden';
      }
    }
    return null;
  }


}
