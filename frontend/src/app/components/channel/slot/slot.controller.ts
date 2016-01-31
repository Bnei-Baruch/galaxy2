import { IUser } from '../../../shidur/shidur.service';

/** @ngInject */
export class SlotController {
  $timeout: ng.ITimeoutService;
  $document: any;

  kind: string;
  showAudioToggle: boolean;
  user: IUser;
  isReady: () => boolean;
  trigger: () => void;
  toggleAudio: (user: IUser) => void;
  hotkey: string;

  constructor($scope: any,
      $timeout: ng.ITimeoutService,
      $document: any,
      $mdDialog: angular.material.IDialogService) {
    this.$timeout = $timeout;
    this.$document = $document;

    this.bindHotkey();
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
