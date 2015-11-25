/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { galaxyNavbar } from '../app/components/navbar/navbar.directive';
import { JanusVideoRoomService } from '../app/components/janusVideoRoom/janusVideoRoom.service';
import { ShidurController } from './shidur/shidur.controller';
import { ShidurService } from './shidur/shidur.service';
import { UserController } from './user/user.controller';
import { channelWidget } from '../app/components/channel/channel.directive';
import { ChannelService } from '../app/components/channel/channel.service';

module frontend {
  'use strict';

  var dependencies = [
    'frontend.config',
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ui.router',
    'ngMaterial',
    'toastr'
  ];

  angular.module('frontend', dependencies)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('janus', JanusVideoRoomService)
    .service('shidur', ShidurService)
    .service('channel', ChannelService)
    .controller('ShidurController', ShidurController)
    .controller('UserController', UserController)
    .directive('galaxyNavbar', galaxyNavbar)
    .directive('channelWidget', channelWidget);
}
