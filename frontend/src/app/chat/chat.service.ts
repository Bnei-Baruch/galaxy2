import {IUser} from '../components/auth/auth.service';

/** @ngInject */
export class ChatService {
  popupWindow: any = null;

  constructor(private $rootScope: ng.IRootScopeService,
              private $state: ng.ui.IStateService,
              private $window: ng.IWindowService) {
  }

  start(user: IUser) {
    if (this.popupWindow === null) {
      var chatUrl = this.$state.href('chat', {}, {absolute: true});
      this.popupWindow = this.$window.open(chatUrl, 'chat');
    }

    this.$rootScope.$broadcast('chat.create', user);
  }
}
