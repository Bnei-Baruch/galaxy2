import { MainController } from './main.controller';

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('frontend'));

  beforeEach(inject(($controller: ng.IControllerService, toastr: any) => {
    spyOn(toastr, 'info').and.callThrough();

    mainController = $controller('MainController');
  }));

});
