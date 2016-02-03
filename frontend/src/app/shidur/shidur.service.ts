export interface IUser {
  login: string;
  title: string;
  channel: string;
  role: string;
  joined?: moment.Moment;
  stream?: MediaStream;
  audioEnabled?: boolean;
}

export interface IUsers {
  [login: string]: IUser;
}

/* @ngInject */
export class ShidurService {
  $http: ng.IHttpService;
  $q: any;
  config: any;

  constructor($http: ng.IHttpService, $q: any, config: any) {
    this.$http = $http;
    this.$q = $q;
    this.config = config;
  }

  public getUsers() {
    var deferred = this.$q.defer();

    this.$http.get(this.config.backendUri + '/rest/users').success((users) => {
      deferred.resolve(users);
    });

    return deferred.promise;
  }
}
