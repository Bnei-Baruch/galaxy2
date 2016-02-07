import { ChannelWidget } from '../channel.directive';
import { LargeChannelController } from './large.controller';

/** @ngInject */
export class LargeChannelWidget extends ChannelWidget {
    templateUrl = 'app/components/channel/large/large.html';
    controller = LargeChannelController;
}
