var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var channel_directive_1 = require('../channel.directive');
var large_controller_1 = require('./large.controller');
/** @ngInject */
var LargeChannelWidget = (function (_super) {
    __extends(LargeChannelWidget, _super);
    function LargeChannelWidget() {
        _super.apply(this, arguments);
        this.templateUrl = 'app/components/channel/large/large.html';
        this.controller = large_controller_1.LargeChannelController;
    }
    return LargeChannelWidget;
})(channel_directive_1.ChannelWidget);
exports.LargeChannelWidget = LargeChannelWidget;
