import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';
import { IUser, IUsers } from '../../shidur/shidur.service';
import { ChannelService } from './channel.service';

export interface IChannelScope extends ng.IScope
{
  users: IUsers;
  name: string;
  selfElement: ng.IAugmentedJQuery;
}

/** @ngInject */
export class ChannelController {
  users: IUsers;
  previewUser: IUser;
  toastr: any;
  channel: ChannelService;
  selfElement: ng.IAugmentedJQuery;
  janus: JanusVideoRoomService;

  constructor($scope: IChannelScope,
              janus: JanusVideoRoomService,
              toastr: any, config: any) {
    this.selfElement = $scope.selfElement;
    // this.users = $scope.users;
    this.janus = janus;

    this.janus.registerChannel({
      name: $scope.name,
      users: this.users.map((u) => { return u.login; }),
      joinedCallback: this.userJoined,
      leftCallback: this.userLeft
    });
  }

  userJoined(login) {
    // TODO: Moment actually better to register while user logges in
    // from user point of view, not from shidur point of view
    this.users[login].joined = moment();

    // Means he sends video/audio to janus
    // Now we decide to get his video/audio here or not.
    // If program or preview ==> get stream + show on video element
    if (!this.previewUser) {
      debugger;
      var element = this.selfElement.find('.preview');
      this.janus.attachRemoteHandle(login, element);
    }
  }

  userLeft(login) {
    this.users[login].joined = null;
  }

}
