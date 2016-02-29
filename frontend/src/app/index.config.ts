/** @ngInject */
export function config($provide: ng.auto.IProvideService,
    $logProvider: ng.ILogProvider,
    $authProvider: any,
    toastrConfig: any,
    config: any,
    RollbarProvider: any) {

  // Enable log
  $logProvider.debugEnabled(true);

  // Toastr
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  $authProvider.configure({
    apiUrl: config.backendUri + '/rest'
  });

  RollbarProvider.init({
    accessToken: config.rollbarToken,
    source_map_enabled: true,
    code_version: config.codeVersion || 'unknown_version',
    captureUncaught: true,
    payload: {
      environment: config.environment || 'development'
    }
  });

  // Log errors to Rollbar
  $provide.decorator('$log', ($delegate: any) => {
    var origCritical = $delegate.critical;

    // arguments object cannot be used in arrow function
    $delegate.critical = function() {
      RollbarProvider.critical(arguments);
      origCritical.apply(null, arguments);
    };

    return $delegate;
  });
}
