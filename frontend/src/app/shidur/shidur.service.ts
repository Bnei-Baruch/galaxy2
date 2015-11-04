export interface IUser {
  login?: string;
  title: string;
  channel: string;
}

export interface IUsers {
  [login: string]: IUser;
}

export class ShidurService {
  public getUsers(): IUser[] {
    return {
      afula: { title: "Afula", channel: "large1" },
      arad: { title: "Arad", channel: "large1" },
      beer-sheva: { title: "Beer Sheva" channel: "large2" },
      eilat: { title: "Eilat" channel: "large2" },
      naharia: { title: "Naharia", channel: "small1" },
      nazareth: { title: "Nazareth Illit", channel: "small1"},
      raanana: { title: "Raanana", channel: "small2" },
      rehovot: { title: "Rehovot", channel: "small2" },
    };
  }
}
