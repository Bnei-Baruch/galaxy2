import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';
import { IUser, IUsers } from '../../shidur/shidur.service';
import { ChannelService } from './channel.service';

interface IChannelScope extends ng.IScope
{
  users: IUsers;
  name: string;
}

/** @ngInject */
export class ChannelController {
  users: IUsers;
  previewUser: IUser;
  toastr: any;
  channel: ChannelService;

  constructor($scope: IChannelScope,
              janus: JanusVideoRoomService,
              toastr: any, config: any) {
    this.users = $scope.users;

    janus.registerChannel({
      name: $scope.name,
      users: this.users,
      joinedCallback: this.userJoined,
      leftCallback: this.userLeft
    });
  }

  userJoined(login) {
    this.users[login].joined = moment();

    // Means he sends video/audio to janus
    // Now we decide to get his video/audio here or not.
    // If program or preview ==> get stream + show on video element
    if (!this.previewUser) {
      var element = ...;
      janus.attachRemoteHandle(login, element);
    }
  }

  userLeft(login) {
    this.users[login].joined = null;
  }

}
