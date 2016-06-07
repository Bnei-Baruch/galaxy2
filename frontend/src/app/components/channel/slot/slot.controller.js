/** @ngInject */
var SlotController = (function () {
    function SlotController($mdDialog) {
        this.$mdDialog = $mdDialog;
    }
    SlotController.prototype.onLink = function (scope, element) {
        var _this = this;
        var sourceMedia = element.find('video').get(0);
        var cloneSourceVideo = function (scope, dialogEl) {
            var targetMedia = dialogEl.find('video').get(0);
            targetMedia.src = sourceMedia.src;
        };
        var stopTargetVideo = function (scope, dialogEl) {
            var targetMedia = dialogEl.find('video').get(0);
            targetMedia.src = null;
        };
        element.bind('contextmenu', function (e) {
            scope.$apply(function () {
                e.preventDefault();
                if (!sourceMedia.paused && !sourceMedia.ended) {
                    _this.$mdDialog.show({
                        clickOutsideToClose: true,
                        templateUrl: 'app/components/channel/slot/slot.zoomIn.html',
                        onShowing: cloneSourceVideo,
                        onRemoving: stopTargetVideo
                    });
                }
            });
        });
    };
    return SlotController;
})();
exports.SlotController = SlotController;
