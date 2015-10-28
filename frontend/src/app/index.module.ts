/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ShidurService } from './main/main.service';
import { galaxyNavbar } from '../app/components/navbar/navbar.directive';
import { channelWidget } from '../app/components/channel/channel.directive';

module frontend {
  'use strict';

  angular.module('frontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('shidur', ShidurService)
    .controller('MainController', MainController)
    .directive('galaxyNavbar', galaxyNavbar)
    .directive('channelWidget', channelWidget);
}
