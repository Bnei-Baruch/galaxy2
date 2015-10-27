import { NavbarController } from './navbar.directive';

/**
 * @todo Complete the test
 * This example is not perfect.
 * Test should check if MomentJS have been called
 */
describe('directive navbar', function() {
  let element: ng.IAugmentedJQuery;
  let navbarController: NavbarController;

  beforeEach(angular.mock.module('frontend'));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    const currentDate: Date = new Date();

    element = angular.element(`
      <galaxy-navbar></galaxy-navbar>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    navbarController = (<any> element.isolateScope()).vm;
  }));

  it('should be compiled', function() {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', function() {
    expect(navbarController).not.toBeNull();
  });
});
