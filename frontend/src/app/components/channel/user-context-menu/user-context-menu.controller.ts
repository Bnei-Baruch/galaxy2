/* @ngInject */
export class UserContextMenuController {
  constructor(private $mdDialog: angular.material.IDialogService) {
  }

  toggleUser() {
    console.log();
  }

  fixForwardingIssues(login: string, channelName: string) {
    this.$mdDialog.show({
      clickOutsideToClose: false,
      templateUrl: 'app/components/channel/users/users.fix-forwarding.html',
      controller: 'UserContextMenuController',
      controllerAs: 'contextMenu',
      locals: {
        channelName: channelName
      }
    }).then(() => {
      console.log('Kolman rocks!');
    });
  }
}
