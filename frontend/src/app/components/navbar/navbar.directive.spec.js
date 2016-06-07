/**
 * @todo Complete the test
 * This example is not perfect.
 * Test should check if MomentJS have been called
 */
describe('directive navbar', function () {
    var element;
    var navbarController;
    beforeEach(angular.mock.module('frontend'));
    beforeEach(inject(function ($compile, $rootScope) {
        var currentDate = new Date();
        element = angular.element("\n      <galaxy-navbar></galaxy-navbar>\n    ");
        $compile(element)($rootScope.$new());
        $rootScope.$digest();
        navbarController = element.isolateScope().vm;
    }));
    it('should be compiled', function () {
        expect(element.html()).not.toEqual(null);
    });
    it('should have isolate scope object with instanciate members', function () {
        expect(navbarController).not.toBeNull();
    });
});
