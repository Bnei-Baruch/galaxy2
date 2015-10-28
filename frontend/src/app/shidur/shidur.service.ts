export interface IUser {
  login: string;
  title: string;
}

export interface IUsersBreakdown {
  large1: IUser[];
  large2: IUser[];
  small1: IUser[];
  small2: IUser[];
  control: IUser[];
}

export class ShidurService {
  public getUsersBreakdown(): IUsersBreakdown {
    return {
      large1: [
        {login: 'afula', title: 'Afula'},
        {login: 'arad', title: 'Arad'},
      ],
      large2: [
        {login: 'beer-sheva', title: 'Beer Sheva'},
        {login: 'eilat', title: 'Eilat'},
      ],
      small1: [
        {login: 'naharia', title: 'Naharia'},
        {login: 'nazareth', title: 'Nazareth Illit'},
      ],
      small2: [
        {login: 'raanana', title: 'Raanana'},
        {login: 'rehovot', title: 'Rehovot'},
      ],
      control: [
        {login: 'afula', title: 'Afula'},
        {login: 'arad', title: 'Arad'},
        {login: 'beer-sheva', title: 'Beer Sheva'},
        {login: 'eilat', title: 'Eilat'},
      ]
    };
  }

  public getStream(login: string) {
    return {
      id: 1
    };
  }
}
