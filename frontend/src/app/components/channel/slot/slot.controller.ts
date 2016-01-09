import { IUser } from '../../../shidur/shidur.service';
import { PubSubService } from '../../pubSub/pubSub.service';

/** @ngInject */
export class SlotController {
  $timeout: ng.ITimeoutService;
  $document: any;
  pubSub: PubSubService;

  kind: string;
  showAudioToggle: boolean;
  user: IUser;
  isReady: () => boolean;
  trigger: () => void;
  hotkey: string;

  constructor( $timeout: ng.ITimeoutService, $document: any, pubSub: PubSubService) {
    this.$timeout = $timeout;
    this.$document = $document;
    this.pubSub = pubSub;

    this.bindHotkey();
  }

  toggleAudio() {
    this.user.audioEnabled = !this.user.audioEnabled;

    this.pubSub.client.publish('/users/' + this.user.login, {
      message: 'toggleAudio',
      enabled: this.user.audioEnabled
    });

    console.debug('toggleAudio() triggered');
    return false;
  }

  bindHotkey() {
    if (this.hotkey) {
      this.$document.bind('keydown', (e: KeyboardEvent) => {
        if (e.keyCode === this.hotkey.charCodeAt(0)) {
          this.$timeout(() => {
            this.trigger();
          });
        }
      });
    }
  }

}
