export interface IRoomModel {
  id: number;
  roomUsers: IRoomUser[];
}

export interface IRoomUser {
  index: number;
  name: string;
}
