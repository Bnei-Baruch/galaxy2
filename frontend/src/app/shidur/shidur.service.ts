export interface IUser {
  login: string;
  title: string;
  channel: string;
  joined?: moment.Moment;
}

export interface IUsers {
  [login: string]: IUser;
}

export class ShidurService {
  public getUsers() {
    return {
      users: [
        { login: 'afula', title: 'Afula', channel: 'large1' },
        { login: 'arad', title: 'Arad', channel: 'large1' },
        { login: 'haifa', title: 'Haifa', channel: 'large1' },
        { login: 'moscow', title: 'Moscow', channel: 'large1' },
        { login: 'beer-sheva', title: 'Beer Sheva', channel: 'large2' },
        { login: 'eilat', title: 'Eilat', channel: 'large2' },
        { login: 'toronto', title: 'Toronto', channel: 'large2' },
        { login: 'new-york', title: 'New York', channel: 'large2' },
        { login: 'naharia', title: 'Naharia', channel: 'small1' },
        { login: 'nazareth', title: 'Nazareth Illit', channel: 'small1'},
        { login: 'raanana', title: 'Raanana', channel: 'small2' },
        { login: 'rehovot', title: 'Rehovot', channel: 'small2' },
      ]
    };
  }
}
