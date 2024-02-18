import { IRoomModel, IRoomUser } from '../models/room.model.js';

const roomsStorage: IRoomModel[] = [];

export const roomsDatabase = {
  createRoom(roomUser: IRoomUser): IRoomModel {
    const roomId = roomsStorage.length;

    const room: IRoomModel = {
      id: roomId,
      roomUsers: [roomUser],
    };

    roomsStorage.push(room);

    return room;
  },
};
