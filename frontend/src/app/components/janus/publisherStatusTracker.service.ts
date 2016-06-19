import { IUser } from '../auth/auth.service';

export enum InternetConnectionType {
  danger = 3,
  warning = 2,
  normal = 1
}

/** @ngInject */
export class PublisherStatusTrackerService {
  /*
     This class keeps track of how  many times a group disconnect in a given tine interval.status
   */


  // if after last disconnection was more than this time - it's a new session. 3.5 hours (morning lesson)
  private resetStatusInterval: any = moment({ hour: 3, minute: 30 });
  private toastr: any;
  constructor($injector: any) {
    this.toastr = $injector.get('toastr');

    if (!localStorage.getItem('disconnectHistoryByLogin')) {
      localStorage.setItem('disconnectHistoryByLogin', '{}');
    }
  }

  public disconnect(login: string): InternetConnectionType {
    var history: Array<any> = this.userStatusByLogin(login);
    history.push(moment());
    this.save(history, login);

    return this.statusByHistory(history, login);
  }
/**
Check all users statuses on brouser reload. 
*/
  public setAllUsersStatus(usersByLogin: { [login: string]: IUser }/*, disableUserCallback: (user: IUser) => any*/): void {
    var historyByLogin = JSON.parse(localStorage.getItem('disconnectHistoryByLogin'));
    for (var login in usersByLogin ) {
      if (!usersByLogin.hasOwnProperty(login)) {
        continue;
      }

      var user: IUser = usersByLogin[login];
      var userHistory: Array<any> = historyByLogin[login] || [];
      var lastDisconnect: any = userHistory[userHistory.length - 1];

      if (!lastDisconnect || moment().startOf(lastDisconnect).fromNow() > this.resetStatusInterval) {
        userHistory = [];
        continue;
      }

      user.connectionStatus = this.statusByHistory(userHistory, login);

      switch (user.connectionStatus) {
        case InternetConnectionType.danger:
          user.disabled = true;
          break;
        case InternetConnectionType.warning:
          break;
        case InternetConnectionType.normal:
          break;
      }
    }
    localStorage.setItem('disconnectHistoryByLogin', JSON.stringify(historyByLogin));
  }

  public connectStatusByLogin(login: string): InternetConnectionType {
    var history: Array<any> = this.userStatusByLogin(login);
    return this.statusByHistory(history, login);
  }

  private save(history: Array<any>, login: string): void {
    if (history.length > 100) {
      history.splice(0, 10);
    }
    var historyByLogin = JSON.parse(localStorage.getItem('disconnectHistoryByLogin'));
    historyByLogin[login] = history;
    localStorage.setItem('disconnectHistoryByLogin', JSON.stringify(historyByLogin));
  }

  private statusByHistory(history: Array<any>, login: string): InternetConnectionType {
    if (this.checkDisconnects(history, moment({ minute: -1 }), 3)) {
      this.toastr.error(`The user - ${login} was disabled, The reason - internet connection is not stable.`);
      return InternetConnectionType.danger;
    } else if (this.checkDisconnects(history, moment({ minute: -10 }), 3)) {
      return InternetConnectionType.warning;
    }
    return InternetConnectionType.normal;
  }

  private checkDisconnects(history: Array<any>, startOn: any, occurences: number): boolean {
    var disconnectsWithin = history.filter((ts: string) => { return moment(ts).isAfter(startOn); });
    return disconnectsWithin.length >= occurences;
  }

  private userStatusByLogin(login: string): Array<any> {
    var userStatusByLogin = JSON.parse(localStorage.getItem('disconnectHistoryByLogin'));
    return userStatusByLogin[login] || [];
  }
}
