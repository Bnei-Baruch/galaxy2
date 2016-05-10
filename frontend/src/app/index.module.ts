/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { galaxyNavbar } from '../app/components/navbar/navbar.directive';
import { JanusService } from '../app/components/janus/janus.service';
import { JanusVideoRoomService } from '../app/components/janus/janusVideoRoom.service';
import { JanusStreamingService } from '../app/components/janus/janusStreaming.service';
import { ShidurController } from './shidur/shidur.controller';
import { ShidurService } from './shidur/shidur.service';
import { UserController } from './user/user.controller';
import { FakeUserController } from './user/fake.controller';
import { AdminController } from './admin/admin.controller';
import { FakeSDIController } from './e2e/sdi.controller';
import { LoginController } from '../app/components/auth/login.controller';
import { UserContextMenuController } from '../app/components/channel/users/users.controller';
import { AuthService } from '../app/components/auth/auth.service';
import { PubSubService } from '../app/components/pubSub/pubSub.service';
import { slotWidget } from '../app/components/channel/slot/slot.directive';
import { LargeChannelWidget } from '../app/components/channel/large/large.directive';
import { SmallChannelWidget } from '../app/components/channel/small/small.directive';
import { ControlChannelWidget } from '../app/components/channel/control/control.directive';

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
    'ngContextMenu',
    'ng-token-auth',
    'tandibar/ng-rollbar'
  ];

  angular.module('frontend', dependencies)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('janus', JanusService)
    .service('videoRoom', JanusVideoRoomService)
    .service('streaming', JanusStreamingService)
    .service('shidur', ShidurService)
    .service('authService', AuthService)
    .service('pubSub', PubSubService)
    .controller('ShidurController', ShidurController)
    .controller('UserController', UserController)
    .controller('FakeUserController', FakeUserController)
    .controller('AdminController', AdminController)
    .controller('FakeSDIController', FakeSDIController)
    .controller('LoginController', LoginController)
    .controller('UserContextMenuController', UserContextMenuController)
    .directive('galaxyNavbar', galaxyNavbar)
    .directive('slotWidget', slotWidget)
    .directive('largeChannelWidget', () => new LargeChannelWidget())
    .directive('smallChannelWidget', () => new SmallChannelWidget())
    .directive('controlChannelWidget', () => new ControlChannelWidget())
    ;
}
