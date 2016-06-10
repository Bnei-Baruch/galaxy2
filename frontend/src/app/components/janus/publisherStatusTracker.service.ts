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

export enum EnumInternetConnectionType {
  danger = 1,
  warning = 2,
  normal = 3
}

/** @ngInject */
export class PublisherStatusTrackerService {
  /*
     This class keeps track of how  many times a group disconnect in a given tine interval.status
     Everything we measure is on a per minute basis.

     How to use:
     create new with parameter - login:string
     publisherStatusTracker  = new PublisherStatusTracker (login)
     var isUserHide: boolean = publisherStatusTracker.onDisconnect()

     disconnectHistory: asdfasdfa
     where every letter - disconnection state (by DisconnectType )

     for checking status use list of Regural Expression (regShablons)

   */




  // minimum disconnections of user, aftre that need to disconnect user (minut/disconnect)
  private minCoefDisconnect: number;
  // if after last disconnection was more than this time - it's a new session. 3.5 hours (morning lesson)
  private resetStatusInterval: number = 3.5 * 60 * 60 * 1000;
  // private localStorage: any;
  private warningShablons: Array<RegExp> = [/1/, /22/, /3*3/];
  private errorShablons: Array<RegExp> = [/11/, /222/, /3*3*3/];

  constructor() {
    // this.login = login;
    // once in 5 minuts
    this.minCoefDisconnect = 5 / 1;

    if ( !localStorage.getItem( 'publisherDeleteStatus' ) ) {
      localStorage.setItem('publisherDeleteStatus', '{}');
    }
  }

  public onDisconnect(login: string): EnumInternetConnectionType {
    var status: IPublisherStatus = this.userStatusByLogin(login);

    var deltaMls: number = new Date().getTime() - new Date(status.lastDisconnectDate.toString()).getTime();
    status.lastDisconnectDate = new Date();

    if (deltaMls > this.resetStatusInterval) {
      status = this.getDefaultStatusObj(login);
    }
    status.disconnectHistory = status.disconnectHistory + this.getDisconnectType(deltaMls);
    this.save(status, login);
    return this.verifyStatus(status.disconnectHistory);
  }

  public setAllUsersStatus(usersByLogin: { [login: string]: IUser }, disableUserCallback: (user: IUser) => any): void {
    var userStatusByLogin = JSON.parse(localStorage.getItem('publisherDeleteStatus'));
    for (var login in usersByLogin ) {
      var connectionStaus: number = this.verifyStatus(userStatusByLogin[login].disconnectHistory);
      var user: IUser = usersByLogin[login];

      user.connectionStatus = connectionStaus;
      switch (connectionStaus) {
        case EnumInternetConnectionType.danger:
          disableUserCallback(user);
          break;
        case EnumInternetConnectionType.warning:
          break;
        case EnumInternetConnectionType.normal:
          break;
      }
    }
  }

  public connectStatusByLogin(login: string): EnumInternetConnectionType {
    var userStatus = this.userStatusByLogin(login);
    return this.verifyStatus(userStatus.disconnectHistory);
  }
  private userStatusByLogin(login: string): IPublisherStatus {
    var userStatusByLogin = JSON.parse(localStorage.getItem('publisherDeleteStatus'));
    var status: IPublisherStatus = userStatusByLogin[login];
    if ( status === undefined ) {
      status = this.getDefaultStatusObj(login);
    }
    return status;
  }

  private save(newStatus: IPublisherStatus, login: string): void {
    var userStatusByLogin = JSON.parse(localStorage.getItem('publisherDeleteStatus'));
    userStatusByLogin[login] = newStatus;
    localStorage.setItem('publisherDeleteStatus', JSON.stringify(userStatusByLogin));
  }

  private getDefaultStatusObj(login: string): IPublisherStatus {
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

  private verifyStatus(history: string): EnumInternetConnectionType {
    if (
        this.errorShablons.some(
          function(regExp: RegExp) {
            var _has = regExp.test(history);
            return _has;
          })
       ) {
         return EnumInternetConnectionType.danger;
       } else if (
           this.warningShablons.some(
             function(regExp: RegExp) {
               var _has = regExp.test(history);
               return _has;
             })
           ) {
             return EnumInternetConnectionType.warning;
           }
    return EnumInternetConnectionType.normal;
  }
}
