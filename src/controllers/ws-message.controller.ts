import { WebSocket, RawData, WebSocketServer } from 'ws';
import { IWSMessage, TWSController } from '../models/ws-controller.model.js';
import { REQ_COMMAND_TYPE, reqWSController } from './player/req-ws.controller.js';
import {
  CREATE_ROOM_COMMAND_TYPE,
  createRoomWSController,
} from './room/create-room-ws.controller.js';
import {
  ADD_USER_TO_ROOM_COMMAND_TYPE,
  addUserToRoomWSController,
} from './room/add-user-to-room-ws.controller.js';

const commandTypeToHandlerMap = new Map<string, TWSController>([
  [REQ_COMMAND_TYPE, reqWSController],
  [CREATE_ROOM_COMMAND_TYPE, createRoomWSController],
  [ADD_USER_TO_ROOM_COMMAND_TYPE, addUserToRoomWSController],
]);

export const wsMessageControllerFabric = (wsServer: WebSocketServer) =>
  function wsMessageController(this: WebSocket, rawData: RawData): void {
    const message: IWSMessage = JSON.parse(rawData.toString());

    const controller = commandTypeToHandlerMap.get(message.type);

    if (controller) {
      controller(wsServer, this, message);
    }
  };
