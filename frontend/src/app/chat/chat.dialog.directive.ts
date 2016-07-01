import { ChatDialogController } from './chat.dialog.controller';

/** @ngInject */
export function chatDialog(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs?: ng.IAttributes, ctrl?: ChatDialogController) => {
      ctrl.onLink(scope, element);
    },
    templateUrl: 'app/chat/chat.dialog.html',
    controller: ChatDialogController,
    controllerAs: 'dialog',
    bindToController: true
  };

}

