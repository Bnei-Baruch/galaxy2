import { ChannelWidget } from '../channel.directive';
import { ControlChannelController } from './control.controller';

/** @ngInject */
export class ControlChannelWidget extends ChannelWidget {
    templateUrl = 'app/components/channel/control/control.html';
    controller = ControlChannelController;
}
