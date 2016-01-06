/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { galaxyNavbar } from '../app/components/navbar/navbar.directive';
import { JanusVideoRoomService } from '../app/components/janusVideoRoom/janusVideoRoom.service';
import { ShidurController } from './shidur/shidur.controller';
import { ShidurService } from './shidur/shidur.service';
import { UserController } from './user/user.controller';
import { FakeUserController } from './user/fake.controller';
import { LoginController } from '../app/components/auth/login.controller';
import { AuthService } from '../app/components/auth/auth.service';
import { PubSubService } from '../app/components/pubSub/pubSub.service';
import { largeChannelWidget } from '../app/components/channel/large/large.directive';
import { controlChannelWidget } from '../app/components/channel/control/control.directive';
import { ChannelService } from '../app/components/channel/channel.service';

module frontend {
  'use strict';

  var dependencies = [
    'frontend.config',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ui.router',
    'ngMaterial',
    'toastr',
    'ng-token-auth'
  ];

  angular.module('frontend', dependencies)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('janus', JanusVideoRoomService)
    .service('shidur', ShidurService)
    .service('channel', ChannelService)
    .service('authService', AuthService)
    .service('pubSub', PubSubService)
    .controller('ShidurController', ShidurController)
    .controller('UserController', UserController)
    .controller('FakeUserController', FakeUserController)
    .controller('LoginController', LoginController)
    .directive('galaxyNavbar', galaxyNavbar)
    .directive('largeChannelWidget', largeChannelWidget)
    .directive('controlChannelWidget', controlChannelWidget)
    ;
}
