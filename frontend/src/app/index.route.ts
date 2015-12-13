/** @ngInject */
export function routerConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
  $stateProvider
    .state('shidur', {
      url: '/shidur',
      templateUrl: 'app/shidur/shidur.html',
      controller: 'ShidurController',
      controllerAs: 'shidur',
      data: {
        requireLogin: true
      }
    })
    .state('user', {
      url: '/user',
      templateUrl: 'app/user/user.html',
      controller: 'UserController',
      controllerAs: 'user',
      data: {
        requireLogin: true
      }
    })
    .state('fake', {
      url: '/fake',
      templateUrl: 'app/user/fake.html',
      controller: 'FakeUserController',
      controllerAs: 'fake',
      data: {
        requireLogin: true
      }
    });

  $urlRouterProvider.otherwise('/shidur');
}
