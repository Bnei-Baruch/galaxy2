/** @ngInject */
export function runBlock($log: ng.ILogService, $rootScope: ng.IRootScopeService, Janus: any) {
  // janus
  Janus.init({
    debug: true,
    callback: () => {
      $rootScope.$broadcast('janusInitialized');
    }
  });

  $log.debug('runBlock end');
}
