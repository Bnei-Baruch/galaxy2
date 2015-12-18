import { IUser } from '../../shidur/shidur.service';
import IDialogService = angular.material.IDialogService;

// Implementation follows guidelines from:
// http://brewhouse.io/blog/2014/12/09/authentication-made-simple-in-single-page-angularjs-applications.html

export interface IGalaxyScope extends ng.IRootScopeService {
  currentUser?: any;
}

/** @ngInject */
export class AuthService {
  $q: ng.IQService;
  $mdDialog: IDialogService;
  $auth: any;
  toastr: any;
  user: IUser;

  constructor($q: ng.IQService, $mdDialog: IDialogService, toastr: any, $auth: any) {
    this.$q = $q;
    this.$mdDialog = $mdDialog;
    this.$auth = $auth;
    this.toastr = toastr;
  }

  authenticate() {
    var deferred = this.$q.defer();

    this.$auth.validateUser().then((user) => {
      this.user = user;
      deferred.resolve(user);
    }).catch((resp) => {
      // User not authenticated, displaying login modal
      this.$mdDialog.show({
        clickOutsideToClose: false,
        templateUrl: 'app/components/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      }).then((user) => {
        this.user = user;
        deferred.resolve(user);
      });
    });
    return deferred.promise;
  }

  can(role) {
    if (!role) return true;
    if (this.user.role === 'admin') return true;
    if (this.user.role === 'operator') return ['operator', 'user'].indexOf(role) !== -1;
    if (this.user.role === 'user') return role === 'user';
    return false;
  }

  logout() {
    return this.$auth.signOut();
  }
}
