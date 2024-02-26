import { playersDatabase } from '../../db/players.db.js';
import { roomsDatabase } from '../../db/rooms.db.js';
import { IRoomUser } from '../../models/room.model.js';

export interface IAddUserToRoomData {
  indexRoom: number;
}

export const addUserToRoomCommandHandler = (data: IAddUserToRoomData, playerName: string): void => {
  const room = roomsDatabase.getRoomById(data.indexRoom);
  if (!room) {
    return;
  }

  const playerIndex = playersDatabase.getPlayerIndex(playerName);

  const isPlayerInTheRoom = room.roomUsers.some((roomUser) => roomUser.index === playerIndex);
  if (isPlayerInTheRoom) {
    return;
  }

  const roomUser: IRoomUser = {
    index: playerIndex,
    name: playerName,
  };

  roomsDatabase.addUserToRoom(data.indexRoom, roomUser);
};
