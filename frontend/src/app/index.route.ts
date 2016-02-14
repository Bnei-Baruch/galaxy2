/** @ngInject */
export function routerConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
  $stateProvider
    .state('shidur', {
      url: '/shidur',
      templateUrl: 'app/shidur/shidur.html',
      controller: 'ShidurController',
      controllerAs: 'shidur',
      data: {
        requireLogin: true,
        minRole: 'operator'
      }
    })
    .state('user', {
      url: '/user',
      templateUrl: 'app/user/user.html',
      controller: 'UserController',
      controllerAs: 'user',
      data: {
        requireLogin: true,
        minRole: 'user'
      }
    })
    .state('help', {
      url: '/help',
      templateUrl: 'app/help/shidur.html',
      data: {
        requireLogin: true,
        minRole: 'operator'
      }
    })
    .state('fake', {
      url: '/fake',
      templateUrl: 'app/user/fake.html',
      controller: 'FakeUserController',
      controllerAs: 'fake',
      data: {
        requireLogin: true,
        minRole: 'admin'
      }
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin',
      data: {
        requireLogin: true,
        minRole: 'admin'
      }
    });
}
