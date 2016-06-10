import { IUser } from '../auth/auth.service';

interface IPublisherStatus {
  login: string;
  disconnectHistory: string;
  lastDisconnectDate: Date;
}

/*
   for usually count disconnections with delta > once by any minuts (can be > 1 and < 100)
   for onceMin - with  5 min > delta > 1 min
   for onceSec  -  1 min > delta
 */
enum DisconnectType {
  'sec_0_1' = 1,
  'sec_1_10' = 2,
  'sec_10_60' = 3,
  'sec_60_600' = 4,
  'sec_600_' = 5
}

export enum InternetConnectionType {
  danger = 3,
  warning = 2,
  normal = 1
}

/** @ngInject */
export class PublisherStatusTrackerService {
  /*
     This class keeps track of how  many times a group disconnect in a given tine interval.status

     connectStatus: InternetConnectionType  = status of user internet stable

     disconnectHistory: 1234
     where every letter - disconnection state (by DisconnectType )

     for checking status use list of Regural Expression (regShablons)

   */




  // minimum disconnections of user, aftre that need to disconnect user (minut/disconnect)
  private minCoefDisconnect: number;
  // if after last disconnection was more than this time - it's a new session. 3.5 hours (morning lesson)
  private resetStatusInterval: number = 3.5 * 60 * 60 * 1000;
  // private localStorage: any;
  private warningShablons: Array<RegExp> = [/1/, /22/, /333/];
  private errorShablons: Array<RegExp> = [/11/, /222/, /3333/];

  constructor() {
    // this.login = login;
    // once in 5 minuts
    this.minCoefDisconnect = 5 / 1;

    if ( !localStorage.getItem( 'publisherDeleteStatus' ) ) {
      localStorage.setItem('publisherDeleteStatus', '{}');
    }
  }

  public onDisconnect(login: string): InternetConnectionType {
    var status: IPublisherStatus = this.userStatusByLogin(login);

    var deltaMls: number = new Date().getTime() - new Date(status.lastDisconnectDate.toString()).getTime();
    status.lastDisconnectDate = new Date();

    if (deltaMls > this.resetStatusInterval) {
      status = this.getDefaultStatus(login);
    }
    status.disconnectHistory = status.disconnectHistory + this.getDisconnectType(deltaMls);
    this.save(status, login);
    return this.verifyStatus(status.disconnectHistory);
  }

  public setAllUsersStatus(usersByLogin: { [login: string]: IUser }/*, disableUserCallback: (user: IUser) => any*/): void {
    var userStatusByLogin = JSON.parse(localStorage.getItem('publisherDeleteStatus'));
    for (var login in usersByLogin ) {
      if (!usersByLogin.hasOwnProperty(login)) {
        continue;
      }
      var user: IUser = usersByLogin[login];
      var userStatus: IPublisherStatus = userStatusByLogin[login];
      if (!userStatus) {
        userStatus = this.getDefaultStatus(login);
        this.save(userStatus, login);
      }
      user.connectionStatus = this.verifyStatus(userStatus.disconnectHistory);

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
  }

  public connectStatusByLogin(login: string): InternetConnectionType {
    var userStatus = this.userStatusByLogin(login);
    return this.verifyStatus(userStatus.disconnectHistory);
  }
  private userStatusByLogin(login: string): IPublisherStatus {
    var userStatusByLogin = JSON.parse(localStorage.getItem('publisherDeleteStatus'));
    var status: IPublisherStatus = userStatusByLogin[login];
    if ( status === undefined ) {
      status = this.getDefaultStatus(login);
    }
    return status;
  }

  private save(newStatus: IPublisherStatus, login: string): void {
    var userStatusByLogin = JSON.parse(localStorage.getItem('publisherDeleteStatus'));
    userStatusByLogin[login] = newStatus;
    localStorage.setItem('publisherDeleteStatus', JSON.stringify(userStatusByLogin));
  }

  private getDefaultStatus(login: string): IPublisherStatus {
    return {
      login: login,
      disconnectHistory: '',
      lastDisconnectDate: new Date()
    };
  }

  private getDisconnectType(delta: number): string {
    if (delta < 1000) {
      return DisconnectType.sec_0_1.toString();
    } else if (delta < 10 * 1000) {
      return DisconnectType.sec_1_10.toString();
    } else if (delta < 60 * 1000) {
      return DisconnectType.sec_10_60.toString();
    } else if (delta < 600 * 1000) {
      return DisconnectType.sec_60_600.toString();
    } else {
      return DisconnectType.sec_600_.toString();
    }
  }

  private verifyStatus(history: string): InternetConnectionType {
    if (
        this.errorShablons.some(
          function(regExp: RegExp) {
            var _has = regExp.test(history);
            return _has;
          })
       ) {
         return InternetConnectionType.danger;
       } else if (
           this.warningShablons.some(
             function(regExp: RegExp) {
               var _has = regExp.test(history);
               return _has;
             })
           ) {
             return InternetConnectionType.warning;
           }
    return InternetConnectionType.normal;
  }
}
