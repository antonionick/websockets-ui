import { WebSocketServer, WebSocket } from 'ws';
import { IWSMessage, TWSController } from '../../models/ws-controller.model.js';
import { websocketToPlayerStore } from '../../store/websoket-to-player.store.js';
import { IAddUserToRoomData, addUserToRoomCommandHandler } from '../../handlers/room/add-user-to-room-command.handler.js';
import { updateRoomController } from './update-room.controller.js';
import { createGameController } from './create-game.controller.js';

export const ADD_USER_TO_ROOM_COMMAND_TYPE = 'add_user_to_room';

export const addUserToRoomWSController: TWSController = (
  webSocketServer: WebSocketServer,
  webSocket: WebSocket,
  message: IWSMessage,
): void => {
  const data: IAddUserToRoomData = JSON.parse(message.data);
  const playerName = websocketToPlayerStore.getPlayerNameByWebSocket(webSocket);

  const room = addUserToRoomCommandHandler(data, playerName);

  if (room != null) {
    updateRoomController(webSocketServer);
    createGameController(room);
  }
};
