declare var Faye: any;

/** @ngInject */
export class PubSubService {
  public client: any;

  constructor(config: any) {
    this.client = new Faye.Client(config.backendUri + '/pubsub');
  }
}
