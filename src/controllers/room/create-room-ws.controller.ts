import { WebSocket, WebSocketServer } from 'ws';
import { playersDatabase } from '../../db/players.db.js';
import { TWSController } from '../../models/ws-controller.model.js';
import { websocketToPlayerStore } from '../../store/websoket-to-player.store.js';
import { createRoomCommandHandler } from '../../handlers/room/create-room-command.handler.js';
import { updateRoomController } from './update-room.controller.js';

export const CREATE_ROOM_COMMAND_TYPE = 'create_room';

export const createRoomWSController: TWSController = (
  webSocketServer: WebSocketServer,
  webSocket: WebSocket,
): void => {
  const playerName = websocketToPlayerStore.getPlayerNameByWebSocket(webSocket);
  const playerIndex = playersDatabase.getPlayerIndex(playerName);

  createRoomCommandHandler(playerName, playerIndex);
  updateRoomController(webSocketServer);
};
