import { playersDatabase } from '../../db/players.db.js';
import { roomsDatabase } from '../../db/rooms.db.js';
import { IRoomModel, IRoomUser } from '../../models/room.model.js';

export interface IAddUserToRoomData {
  indexRoom: number;
}

export const addUserToRoomCommandHandler = (
  data: IAddUserToRoomData,
  playerName: string,
): IRoomModel | null => {
  const room = roomsDatabase.getRoomById(data.indexRoom);
  if (!room) {
    return null;
  }

  const playerIndex = playersDatabase.getPlayerIndex(playerName);

  const isPlayerInTheRoom = room.roomUsers.some((roomUser) => roomUser.index === playerIndex);
  if (isPlayerInTheRoom) {
    return null;
  }

  const roomUser: IRoomUser = {
    index: playerIndex,
    name: playerName,
  };

  roomsDatabase.addUserToRoom(data.indexRoom, roomUser);

  return room;
};
