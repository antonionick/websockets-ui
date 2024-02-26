import { IRoomModel, IRoomUser } from '../models/room.model.js';

const roomsStorage: IRoomModel[] = [];

export const roomsDatabase = {
  getRoomById(roomId: number): IRoomModel | undefined {
    return roomsStorage.find((room) => room.roomId === roomId);
  },
  createRoom(roomUser: IRoomUser): IRoomModel {
    const lastRoomId = roomsStorage[roomsStorage.length - 1]?.roomId;
    const roomId = (lastRoomId ?? 0) + 1;

    const room: IRoomModel = {
      roomId,
      roomUsers: [roomUser],
    };

    roomsStorage.push(room);

    return room;
  },
  addUserToRoom(roomId: number, roomUser: IRoomUser): void {
    const room = this.getRoomById(roomId);

    room?.roomUsers.push(roomUser);
  },
  getRoomsWithOnePlayer(): IRoomModel[] {
    return roomsStorage.filter((room) => room.roomUsers.length === 1);
  },
};
