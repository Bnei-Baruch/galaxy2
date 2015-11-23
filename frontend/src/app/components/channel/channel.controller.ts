import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';
import { IUser, IUsers } from '../../shidur/shidur.service';
import { ChannelService } from './channel.service';

export interface IChannelScope extends ng.IScope
{
  users: IUser[];
  name: string;
  selfElement: ng.IAugmentedJQuery;
}

/** @ngInject */
export class ChannelController {
  users: IUser[];
  previewUser: IUser;
  scope: IChannelScope;
  toastr: any;
  channel: ChannelService;
  janus: JanusVideoRoomService;
  name: string;

  constructor($scope: IChannelScope,
              janus: JanusVideoRoomService,
              toastr: any, config: any) {
    this.scope = $scope;
    // this.users = $scope.users;
    this.janus = janus;

    this.janus.registerChannel({
      name: this.name,
      users: this.users.map((u) => { return u.login; }),
      joinedCallback: (login) => { this.userJoined(login); },
      leftCallback: (login) => { this.userLeft(login); }
    });
  }

  userJoined(login) {
    // TODO: Moment actually better to register while user logges in
    // from user point of view, not from shidur point of view
    //this.users[login].joined = moment();

    // Means he sends video/audio to janus
    // Now we decide to get his video/audio here or not.
    // If program or preview ==> get stream + show on video element
    if (!this.previewUser) {
      this.previewUser = login;
      var element = this.scope.selfElement.find('.preview').get(0);
      this.janus.attachRemoteHandle(login, element);
    }
  }

  userLeft(login) {
    //this.users[login].joined = null;
    console.debug('User left', login);
    if (login == this.previewUser) {
      this.previewUser = null;
    }
  }

}
