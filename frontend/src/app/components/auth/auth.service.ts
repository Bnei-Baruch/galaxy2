// Implementation follows guidelines from:
// http://brewhouse.io/blog/2014/12/09/authentication-made-simple-in-single-page-angularjs-applications.html

// TODO: consider moving to a proper place
export interface IGalaxyScope extends ng.IRootScopeService {
  currentUser?: any;
}

export interface IUser {
  id: number;
  login: string;
  email: string;
  title: string;
  channel: string;
  role: string;
  joined?: moment.Moment;
  stream?: MediaStream;
  audioEnabled?: boolean;
  completesComposite?: boolean;
  disabled?: boolean;
}


/** @ngInject */
export class AuthService {
  user: IUser;

  constructor($rootScope: ng.IRootScopeService,
      private $q: ng.IQService,
      private $mdDialog: angular.material.IDialogService,
      private $auth: any,
      private toastr: any,
      private Rollbar: any) {
  }

  authenticate() {
    var deferred = this.$q.defer();

    this.$auth.validateUser().then((user: IUser) => {
      this.onLogin(user);
      deferred.resolve(user);
    }).catch((resp: any) => {
      // User not authenticated, displaying login modal
      this.$mdDialog.show({
        clickOutsideToClose: false,
        templateUrl: 'app/components/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      }).then((user: IUser) => {
        this.onLogin(user);
        deferred.resolve(user);
      });

      this.toastr.error(resp.errors.join(' '));

    });
    return deferred.promise;
  }

  can(role: string) {
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
      .then(this.onLogout)
      .catch((resp: any) => {
        this.toastr.error(`Unable to sign out: $(resp.errors)`);
      });
  }

  onLogin(user: IUser) {
    this.user = user;

    this.Rollbar.Rollbar.configure({
      payload: {
        person: {
          id: user.id,
          username: user.login,
          email: user.email
        }
      }
    });
  }

  onLogout() {
    this.Rollbar.configure({payload: {person: null}});
  }
}
