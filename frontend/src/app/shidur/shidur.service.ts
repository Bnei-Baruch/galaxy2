import { IUser } from '../components/auth/auth.service';

/* @ngInject */
export class ShidurService {
  constructor(private $http: ng.IHttpService,
      private $q: ng.IQService,
      private config: any) {
  }

  public getUsers() {
    var deferred = this.$q.defer();

    this.$http.get(this.config.backendUri + '/rest/users').success((users: IUser[]) => {
      deferred.resolve(users);
    });

    return deferred.promise;
  }
}
