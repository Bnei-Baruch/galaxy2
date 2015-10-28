/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { galaxyNavbar } from '../app/components/navbar/navbar.directive';
import { ShidurController } from './shidur/shidur.controller';
import { ShidurService } from './shidur/shidur.service';
import { UserController } from './user/user.controller';
import { channelWidget } from '../app/components/channel/channel.directive';

module frontend {
  'use strict';

  angular.module('frontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('shidur', ShidurService)
    .controller('ShidurController', ShidurController)
    .controller('UserController', UserController)
    .directive('galaxyNavbar', galaxyNavbar)
    .directive('channelWidget', channelWidget);
}
