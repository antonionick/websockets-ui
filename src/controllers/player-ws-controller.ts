import { WebSocket, RawData } from 'ws';
import { IWSMessage } from '../models/controller.model.js';
import { REQ_COMMAND_TYPE, reqCommandHandler } from '../handlers/player/req-command-handler.js';

export function playerWSController(this: WebSocket, rawData: RawData): void {
  const message: IWSMessage = JSON.parse(rawData.toString());

  if (message.type !== REQ_COMMAND_TYPE) {
    return;
  }

  const handlerResult = reqCommandHandler(this, message.data);
  const result = {
    type: message.type,
    id: message.id,
    data: handlerResult,
  };

  this.send(JSON.stringify(result));
}
