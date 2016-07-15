import { IUser, AuthService } from '../components/auth/auth.service';
import { PubSubService } from '../components/pubSub/pubSub.service';

/** @ngInject */
export class ChatService {
  popupInitialized: ng.IPromise<any>;

  constructor(private $rootScope: ng.IRootScopeService,
              private $log: ng.ILogService,
              private $q: ng.IQService,
              private $state: ng.ui.IStateService,
              private $window: ng.IWindowService,
              private $mdDialog: angular.material.IDialogService,
              private authService: AuthService,
              private pubSub: PubSubService,
              private toastr: any) {

    pubSub.client.subscribe(this.getMyChannel(), (message: any) => {
      this.onMessage(message);
    });

  }

  start(user: IUser) {
    if (this.popupInitialized) {
      return this.popupInitialized;
    }
    var deferred = this.$q.defer();
    this.popupInitialized = deferred.promise;

    if (this.authService.can('operator')) {
      this.openPopup();
    } else {
      this.openModal();
    }

    this.$rootScope.$on('chat.popup-initialized', () => {
      this.$rootScope.$broadcast('chat.create', user);
      deferred.resolve();
    });

    return this.popupInitialized;
  }

  send(user: IUser, messageText: string) {
    var channel = this.getUserChannel(user);

    var message =  {
      text: messageText,
      from: this.authService.user
    };

    this.pubSub.client.publish(channel, message).then(() => {
      this.$log.debug('Chat message sent:', channel, message);
    }, (error: any) => {
      var errorMessage = 'Error sending chat message';

      this.$log.error(errorMessage, {
        to: user.login,
        from: this.authService.user.login,
        error: error
      });

      this.toastr.error(errorMessage);
    });
  }

  private openModal() {
    this.$mdDialog.show({
      clickOutsideToClose: false,
      templateUrl: 'app/chat/chat.modal.html',
      controller: 'ChatController',
      controllerAs: 'chat'
    }).finally(() => {
      this.popupInitialized = null;
    });

  }

  private onMessage(message: any) {
    this.start(message.from).then(() => {
      this.$rootScope.$broadcast('chat.message', message);
    });
  }

  private getMyChannel() {
    if (this.authService.can('operator')) {
      var channel = 'operator';
    } else {
      var channel = 'users/' + this.authService.user.login;
    }

    return `/chat/${channel}`;
  }

  private getUserChannel(user: IUser) {
    if (this.authService.can('operator')) {
      var channel = 'users/' + user.login;
    } else {
      var channel = 'operator';
    }

    return `/chat/${channel}`;
  }
}
