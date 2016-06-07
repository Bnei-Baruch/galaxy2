var FakeSDIController = (function () {
    /* @ngInject */
    function FakeSDIController($injector, $timeout, toastr, config) {
        var _this = this;
        this.toastr = toastr;
        this.config = config;
        this.streaming = $injector.get('streaming');
        this.ports = {};
        angular.element(document).ready(function () {
            for (var name in config.janus.sdiPorts) {
                if (config.janus.sdiPorts.hasOwnProperty(name)) {
                    var video = config.janus.sdiPorts[name].video.program;
                    var streamId = config.janus.sdiPorts[name].video.streamId;
                    _this.ports[video] = streamId;
                }
            }
        });
    }
    FakeSDIController.prototype.onVideo = function (port, streamId) {
        var sourceMedia = angular.element('video').get(-1);
        this.streaming.attachStreamingHandle(streamId).then(function (stream) {
            attachMediaStream(sourceMedia, stream);
        });
    };
    return FakeSDIController;
})();
exports.FakeSDIController = FakeSDIController;
