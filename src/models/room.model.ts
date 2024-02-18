export interface IRoomModel {
  roomId: number;
  roomUsers: IRoomUser[];
}

export interface IRoomUser {
  index: number;
  name: string;
}
