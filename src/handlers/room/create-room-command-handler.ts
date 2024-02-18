import { WebSocket } from 'ws';
import { IPlayerModel } from '../../models/player.model.js';
import { playersDatabase } from '../../db/players.db.js';
import { roomsDatabase } from '../../db/rooms.db.js';
import { IRoomUser } from '../../models/room.model.js';

export const CREATE_ROOM_COMMAND_TYPE = 'create_room';

export const createRoomCommandHandler = (
  webSocket: WebSocket,
  player: IPlayerModel
): void => {
  const playerIndex = playersDatabase.getPlayerIndex(player.name);

  const roomUser: IRoomUser = {
    index: playerIndex,
    name: player.name,
  }

  roomsDatabase.createRoom(roomUser);
};
