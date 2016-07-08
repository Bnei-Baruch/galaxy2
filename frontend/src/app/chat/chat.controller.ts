import {IUser} from '../components/auth/auth.service';

/* @ngInject */
export class ChatController {
  // TODO: close on parent close

  // users: { (login: string): IUser } = <any>{};
  chats: any = {};

  constructor ($scope: ng.IScope, $timeout: any) {
    var parentScope = (<any>window).opener.angular.element('body').scope();

    parentScope.$on('chat.create', (e: any, user: IUser) => {
      $timeout(() => {
        if (!this.chats[user.login]) {
          this.chats[user.login] = {
            user: user,
            messages: []
          };
        }
        console.debug(JSON.stringify(this.chats));
      });
    });

    parentScope.$on('chat.message', (e: any, message: any) => {
      $timeout(() => {
        var user = this.chats[message.from.login].user;
        this.chats[message.from.login].messages.push({
          text: message.text,
          from: user
        });
        console.debug(JSON.stringify(this.chats));
      });
    });

    parentScope.$broadcast('chat.popup-initialized');
  }
}
