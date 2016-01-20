import { IUser } from '../../shidur/shidur.service';
import IDialogService = angular.material.IDialogService;

// Implementation follows guidelines from:
// http://brewhouse.io/blog/2014/12/09/authentication-made-simple-in-single-page-angularjs-applications.html

export interface IGalaxyScope extends ng.IRootScopeService {
  currentUser?: any;
}

/** @ngInject */
export class AuthService {
  $q:ng.IQService;
  $mdDialog:IDialogService;
  $auth:any;
  toastr:any;
  user:IUser;
  Rollbar:any;

  constructor($q:ng.IQService, $mdDialog:IDialogService, toastr:any, $auth:any, Rollbar:any) {
    this.$q = $q;
    this.$mdDialog = $mdDialog;
    this.$auth = $auth;
    this.toastr = toastr;
    this.Rollbar = Rollbar;
  }

  authenticate() {
    var deferred = this.$q.defer();

    this.$auth.validateUser().then((user) => {
      this.user = user;
      this.onLogin(user);
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
        this.onLogin(user);
        deferred.resolve(user);
      });
    });
    return deferred.promise;
  }

  can(role) {
    switch (this.user.role) {
      case 'admin':
        return true;
      case 'operator':
        return ['operator', 'user'].indexOf(role) !== -1;
      case 'user':
        return role === 'user';
      default:
        return false;
    }
  }

  logout() {
    return this.$auth.signOut()
      .then(() => this.Rollbar.configure({payload: {person: null}}))
      .catch((resp) => {
        this.toastr.error(`Unable to sign out: $(resp.errors)`);
      });
  }

  onLogin(user) {
    this.Rollbar.configure({
      payload: {
        person: {
          id: user.id,
          username: user.login
        }
      }
    });
  }
}
