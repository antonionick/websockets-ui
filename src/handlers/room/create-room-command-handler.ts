import { roomsDatabase } from '../../db/rooms.db.js';
import { IRoomUser } from '../../models/room.model.js';

export const createRoomCommandHandler = (playerName: string, playerIndex: number): void => {
  const roomUser: IRoomUser = {
    index: playerIndex,
    name: playerName,
  };

  roomsDatabase.createRoom(roomUser);
};
