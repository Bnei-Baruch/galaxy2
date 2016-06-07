var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var channel_singleUser_controller_1 = require('../channel.singleUser.controller');
/** @ngInject */
var LargeChannelController = (function (_super) {
    __extends(LargeChannelController, _super);
    function LargeChannelController() {
        _super.apply(this, arguments);
    }
    LargeChannelController.prototype.trigger = function () {
        if (this.isReadyToSwitch()) {
            this.putUserToProgram(this.previewUser);
            var nextUser = this.getNextUser(this.previewUser);
            this.putUserToPreview(nextUser);
        }
    };
    return LargeChannelController;
})(channel_singleUser_controller_1.SingleUserChannelController);
exports.LargeChannelController = LargeChannelController;
