import { IUser, AuthService } from '../components/auth/auth.service';
import { PubSubService } from '../components/pubSub/pubSub.service';

/** @ngInject */
export class ChatService {
  popupInitialized: ng.IPromise<any>;
  popupWindow: any = null;

  constructor(private $rootScope: ng.IRootScopeService,
              private $log: ng.ILogService,
              private $q: ng.IQService,
              private $state: ng.ui.IStateService,
              private $window: ng.IWindowService,
              private authService: AuthService,
              private pubSub: PubSubService,
              private toastr: any) {

    if (authService.can('operator')) {
      var channel = 'operator';
    } else {
      var channel = 'users/' + authService.user.login;
    }

    pubSub.client.subscribe(`/chat/${channel}`, (message: any) => {
      this.onMessage(message);
    });

    $window.addEventListener('unload', () => {
      if (this.popupWindow) {
        this.popupWindow.close();
      }
    });

  }

  start(user: IUser) {
    if (this.popupInitialized) {
      return this.popupInitialized;
    }
    var deferred = this.$q.defer();
    this.popupInitialized = deferred.promise;

    if (this.popupWindow === null) {
      var chatUrl = this.$state.href('chat', {}, {absolute: true});
      this.popupWindow = this.$window.open(chatUrl, 'chat');

      this.popupWindow.addEventListener('unload', () => {
        //this.popupWindow = null;
        //this.popupInitialized = null;
      });

      this.$rootScope.$on('chat.popup-initialized', () => {
        this.$rootScope.$broadcast('chat.create', user);
        deferred.resolve();
      });
    }

    return this.popupInitialized;
  }

  send(user: IUser, messageText: string) {
    var channel;

    if (this.authService.can('operator')) {
      channel = `/chat/users/${user.login}`;
    } else {
      channel = '/chat/operator';
    }

    var message =  {
      text: messageText,
      from: this.authService.user
    };

    this.pubSub.client.publish(channel, message).then(() => {
      console.debug('Chat message sent:', channel, message);
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

  private onMessage(message: any) {
    console.log('onMessage!');
    console.log(message);
    this.start(message.from).then(() => {
      console.log('THEN!');
      console.log(message);
      this.$rootScope.$broadcast('chat.message', message);
    }, () => { console.log('!!!'); });
  }
}
