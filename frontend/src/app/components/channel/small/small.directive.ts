import { ChannelWidget } from '../channel.directive';
import { SmallChannelController } from './small.controller';

/** @ngInject */
export class SmallChannelWidget extends ChannelWidget {
    templateUrl = 'app/components/channel/small/small.html';
    controller = SmallChannelController;
}
