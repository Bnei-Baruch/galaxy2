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
    apiUrl: config.backendUri + '/rest'
  });

  RollbarProvider.init({
    accessToken: config.rollbarToken,
    source_map_enabled: true,
    code_version: config.code_version || "unknown_version",
    captureUncaught: true,
    payload: {
      environment: config.environment || "development"
    }
  });
}
