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
      templateUrl: 'app/components/fix-forwarding-dialog/fix-forwarding-dialog.html',
      controller: 'FixForwardingDialogController',
      controllerAs: 'fixForwarding',
      locals: {
        channelName: channelName
      },
      bindToController: true
    }).then(() => {
      console.log('Kolman rocks!');
    });
  }
}
