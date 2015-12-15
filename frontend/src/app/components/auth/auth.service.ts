import IDialogService = angular.material.IDialogService;

// Implementation follows guidelines from:
// http://brewhouse.io/blog/2014/12/09/authentication-made-simple-in-single-page-angularjs-applications.html

export interface IGalaxyScope extends ng.IRootScopeService {
  currentUser?: any;
}

/** @ngInject */
export class AuthService {
  $q: any;
  $mdDialog: IDialogService;
  $auth: any;
  toastr: any;

  constructor($q: any, $mdDialog: IDialogService, toastr: any, $auth: any) {
    this.$q = $q;
    this.$mdDialog = $mdDialog;
    this.$auth = $auth;
    this.toastr = toastr;
  }

  authenticate() {
    var deferred = this.$q.defer();

    this.$auth.validateUser().then((user) => {
      deferred.resolve(user);
    }).catch((resp) => {
      // User not authenticated, displaying login modal
      this.$mdDialog.show({
        clickOutsideToClose: false,
        templateUrl: 'app/components/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      }).then((user) => {
        deferred.resolve(user);
      });
    });
    return deferred.promise;
  }

  logout() {
    return this.$auth.signOut();
  }
}
