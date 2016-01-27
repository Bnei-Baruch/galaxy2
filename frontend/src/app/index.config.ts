/** @ngInject */
export function config($logProvider: ng.ILogProvider, $authProvider: any, toastrConfig: any, config: any,
                       RollbarProvider: any) {
  // enable log
  $logProvider.debugEnabled(true);

  // toastr
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  $authProvider.configure({
    apiUrl: config.backendUri,
  });

  RollbarProvider.init({
    accessToken: config.rollbarToken,
    captureUncaught: true,
    payload: {
      environment: config.environment || "development"
    }
  });
}
