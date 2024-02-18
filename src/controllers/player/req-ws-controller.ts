import { WebSocket } from 'ws';
import { IWSMessage, TController } from '../../models/controller.model.js';
import {
  IReqErrorData,
  IReqResultData,
  reqCommandHandler,
} from '../../handlers/player/req-command-handler.js';
import { websocketToPlayerStore } from '../../store/websoket-to-player-store.js';

export const REQ_COMMAND_TYPE = 'reg';

export const reqWSController: TController = (webSocket: WebSocket, message: IWSMessage): void => {
  const data = JSON.parse(message.data);

  const handlerResult = reqCommandHandler(data);

  if (handlerResult.error) {
    return void webSocket.send(getResultToSend(message, handlerResult));
  }

  websocketToPlayerStore.add(webSocket, handlerResult.name);

  // TODO: update_room
  // TODO: update_winners

  webSocket.send(getResultToSend(message, handlerResult));
};

const getResultToSend = (
  message: IWSMessage,
  handlerResult: IReqResultData | IReqErrorData,
): string =>
  JSON.stringify({
    type: message.type,
    id: message.id,
    data: JSON.stringify(handlerResult),
  });
