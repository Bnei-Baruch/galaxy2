declare var Rollbar: any;

/** @ngInject */
export function config(
    $provide: ng.auto.IProvideService,
    $logProvider: ng.ILogProvider,
    $authProvider: any,
    toastrConfig: any,
    config: any,
    RollbarProvider: any) {

  // Enable log
  // $logProvider.debugEnabled(config.environment !== 'production');
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

  console.log('This is run!!!!!!');

  RollbarProvider.init({
    accessToken: config.rollbarToken,
    captureUncaught: true,
    payload: {
      environment: config.environment || 'development',
      client: {
        javascript: {
          source_map_enabled: true,
          code_version: config.codeVersion || 'unknown_version',
          guess_uncaught_frames: true
        }
      }
    }
  });

  // Log errors to Rollbar
  $provide.decorator('$log', ($delegate: any) => {
    var fn = $delegate.error;

    // arguments object cannot be used in arrow function
    $delegate.error = function() {
      var data = Array.prototype.slice.call(arguments);
      fn.apply($delegate, data);
      console.log('!!!');
      console.log(data);
      console.log(Rollbar);
      console.log(Rollbar.error);
      if (Rollbar && Rollbar.error) {
        Rollbar.error.apply(Rollbar, data);
      }
    };

    return $delegate;
  });
}
