import { JanusVideoRoomService } from '../janusVideoRoom/janusVideoRoom.service';

/** @ngInject */
export class ChannelController {
  users: IUsers;
  previewUser: User;
  toastr: any;
  channel: ChannelService;

  constructor($scope: ng.IScope, janus: JanusVideoRoomService, toastr: any, config: any) {
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
    }
  }

  userLeft() {
    this.users[login].joined = null;
  }

}
