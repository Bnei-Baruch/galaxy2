import {IUser} from '../components/auth/auth.service';

/* @ngInject */
export class ChatController {
  // TODO: close on parent close

  users: { (login: string): IUser } = <any>{};

  constructor ($scope: ng.IScope, $timeout: any) {
    var parentScope = (<any>window).opener.angular.element('body').scope();

    parentScope.$on('chat.create', (e: any, user: IUser) => {
      $timeout(() => {
      this.users[user.login] = user;
      console.debug(JSON.stringify(this.users));
      });
    });
  }
}
