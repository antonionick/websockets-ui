import { WebSocket, RawData } from 'ws';
import { IWSMessage, TController } from '../models/controller.model.js';
import { REQ_COMMAND_TYPE, reqWSController } from './player/req-ws-controller.js';
import { CREATE_ROOM_COMMAND_TYPE, createRoomController } from './room/create-room-ws-controller.js';

const commandTypeToHandlerMap = new Map<string, TController>([
  [REQ_COMMAND_TYPE, reqWSController],
  [CREATE_ROOM_COMMAND_TYPE, createRoomController],
]);

export function wsServerController(this: WebSocket, rawData: RawData): void {
  const message: IWSMessage = JSON.parse(rawData.toString());

  const controller = commandTypeToHandlerMap.get(message.type);

  if (controller) {
    controller(this, message);
  }
}
