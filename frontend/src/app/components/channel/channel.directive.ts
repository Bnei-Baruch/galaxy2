/** @ngInject */
export class ChannelWidget implements ng.IDirective {
  restrict = 'E';
  templateUrl = 'app/components/channel/channel.html';
  controllerAs = 'vm';
  bindToController = true;
  scope = {
    name: '@',
    hotkey: '@',
    users: '=',
    usersBreakdown: '='
  };

  link($scope?: ng.IScope, el?: ng.IAugmentedJQuery, attrs?: ng.IAttributes, ctrl?: any) {
    ctrl.onLink($scope, el, attrs);
  }

}
