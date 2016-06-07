/** @ngInject */
var PubSubService = (function () {
    function PubSubService(config) {
        this.client = new Faye.Client(config.backendUri + '/pubsub');
    }
    return PubSubService;
})();
exports.PubSubService = PubSubService;
