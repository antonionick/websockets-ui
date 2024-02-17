import { WebSocket, RawData } from 'ws';
import { TCommandHandler } from '../models/command-handler.model.js';
import { REQ_COMMAND_TYPE, reqCommandHandler } from './commands-handlers/req-command-handler.js';

interface IMessage {
  type: string;
  data: string;
  id: 0;
}

const COMMAND_TYPE_TO_HANDLER_MAP = new Map<string, TCommandHandler>([
  [REQ_COMMAND_TYPE, reqCommandHandler],
]);

export function webSocketMessageHandler(this: WebSocket, rawData: RawData): void {
  const stringData = rawData.toString();
  const message: IMessage = JSON.parse(stringData);

  const handler = COMMAND_TYPE_TO_HANDLER_MAP.get(message.type);

  if (!handler) {
    return;
  }

  const handlerResult = handler(this, message.data);
  const result = {
    type: message.type,
    id: message.id,
    data: handlerResult,
  };

  const stringifiedResult = JSON.stringify(result);

  this.send(stringifiedResult);
}
