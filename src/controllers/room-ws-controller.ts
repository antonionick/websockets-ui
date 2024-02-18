import { WebSocket, RawData } from 'ws';
import { IPlayerModel } from '../models/player.model.js';
import { IWSMessage } from '../models/controller.model.js';
import {
  CREATE_ROOM_COMMAND_TYPE,
  createRoomCommandHandler,
} from '../handlers/room/create-room-command-handler.js';

export const roomWSControllerFabric = (player: IPlayerModel) =>
  function roomWsController(this: WebSocket, rawData: RawData): void {
    const message: IWSMessage = JSON.parse(rawData.toString());

    if (message.type === CREATE_ROOM_COMMAND_TYPE) {
      createRoomCommandHandler(this, player);
    }
  };
