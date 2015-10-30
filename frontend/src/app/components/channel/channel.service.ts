export interface Stream {
  id: number;
}

export class ChannelService {
  public getStream(login: string): Stream {
    return {
      id: 1
    };
  }
}
