var slot_controller_1 = require('./slot.controller');
/** @ngInject */
function slotWidget() {
    return {
        restrict: 'E',
        scope: {
            kind: '@',
            showAudioToggle: '=',
            user: '=',
            isReady: '&',
            trigger: '&',
            toggleAudio: '&',
            hotkey: '=',
            users: '='
        },
        link: function (scope, element, attrs, ctrl) {
            ctrl.onLink(scope, element);
        },
        templateUrl: 'app/components/channel/slot/slot.html',
        controller: slot_controller_1.SlotController,
        controllerAs: 'vm',
        bindToController: false
    };
}
exports.slotWidget = slotWidget;
