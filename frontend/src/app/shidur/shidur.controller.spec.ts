import { ShidurController } from './shidur.controller';

describe('controllers', () => {
  let shidurController: ShidurController;

  beforeEach(angular.mock.module('frontend'));

  beforeEach(inject(($controller: ng.IControllerService, toastr: any) => {
    spyOn(toastr, 'info').and.callThrough();

    shidurController = $controller('ShidurController');
  }));

});
