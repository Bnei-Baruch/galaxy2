/** @ngInject */
export function config($logProvider: ng.ILogProvider, toastrConfig: any) {
  // enable log
  $logProvider.debugEnabled(true);

  // toastr
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
}
