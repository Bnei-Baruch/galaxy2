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
import { channelWidget } from '../app/components/channel/channel.directive';
import { channelControlWidget } from '../app/components/channel/control/channel.control.directive';
import { channelProgramWidget } from '../app/components/channel/program/channel.program.directive';
import { channelPreviewWidget } from '../app/components/channel/preview/channel.preview.directive';
import { channelUsersWidget } from '../app/components/channel/users/channel.users.directive';
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
    .controller('ShidurController', ShidurController)
    .controller('UserController', UserController)
    .controller('FakeUserController', FakeUserController)
    .controller('LoginController', LoginController)
    .directive('galaxyNavbar', galaxyNavbar)
    .directive('channelWidget', channelWidget)
    .directive('channelControlWidget', channelControlWidget)
    .directive('channelProgramWidget', channelProgramWidget)
    .directive('channelPreviewWidget', channelPreviewWidget)
    .directive('channelUsersWidget', channelUsersWidget)
    ;
}
