import { ChatDialogController } from './chat.dialog.controller';

/** @ngInject */
export function chatDialog(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      user: '=',
      messages: '='
    },
    templateUrl: 'app/chat/chat.dialog.html',
    controller: ChatDialogController,
    controllerAs: 'dialog',
    bindToController: true
  };

}

