import { IUser } from '../components/auth/auth.service';
import { JanusVideoRoomService } from '../components/janus/janusVideoRoom.service';

/* @ngInject */
export class FixForwardingDialogController {
  channelName: string;
  currentUser: IUser;
  progress: number = 0;

  constructor (private videoRoom: JanusVideoRoomService) {
    this.stopColumnUsersForwarding()
      .then(this.fixProgramTitle)
      .then(() => {
        $mdDialog.hide();
      });
  }

  stopColumnUsersForwarding() {
    var users = this.videoRoom.channels[this.channelName].users;
    var totalUsers = users.length;

    // TODO: online users only
    var processedCounter = 0;
    var stopForwardingPromises = [];

    users.forEach((user: IUser) => {
      var promise = this.videoRoom.stopSdiForwarding().then(() => {
        processedCounter++;
        this.progress = processedCounter / totalUsers;
      });

      stopForwardingPromises.push(promise);
    });

    return this.$q.all(stopForwardingPromises);
  }

  fixProgramTitle() {
  }

}
