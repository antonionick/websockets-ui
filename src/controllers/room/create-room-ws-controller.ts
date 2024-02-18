import { WebSocket } from 'ws';
import { playersDatabase } from '../../db/players.db.js';
import { TController } from '../../models/controller.model.js';
import { websocketToPlayerStore } from '../../store/websoket-to-player-store.js';
import { createRoomCommandHandler } from '../../handlers/room/create-room-command-handler.js';

export const CREATE_ROOM_COMMAND_TYPE = 'create_room';

export const createRoomController: TController = (webSocket: WebSocket): void => {
  const playerName = websocketToPlayerStore.getPlayerNameByWebSocket(webSocket);
  const playerIndex = playersDatabase.getPlayerIndex(playerName);

  createRoomCommandHandler(playerName, playerIndex);
};
