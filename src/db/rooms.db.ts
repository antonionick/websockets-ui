import { IRoomModel, IRoomUser } from '../models/room.model.js';

const roomsStorage: IRoomModel[] = [];

export const roomsDatabase = {
  createRoom(roomUser: IRoomUser): IRoomModel {
    const roomId = roomsStorage.length;

    const room: IRoomModel = {
      roomId,
      roomUsers: [roomUser],
    };

    roomsStorage.push(room);

    return room;
  },
  getRoomsWithOnePlayer(): IRoomModel[] {
    return roomsStorage.filter((room) => room.roomUsers.length === 1);
  },
};
