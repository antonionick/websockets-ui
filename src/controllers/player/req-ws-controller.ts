import { WebSocket, WebSocketServer } from 'ws';
import { IWSMessage, TWSController } from '../../models/ws-controller.model.js';
import {
  IReqErrorData,
  IReqResultData,
  reqCommandHandler,
} from '../../handlers/player/req-command-handler.js';
import { websocketToPlayerStore } from '../../store/websoket-to-player-store.js';
import { updateRoomController } from '../room/update-room-controller.js';

export const REQ_COMMAND_TYPE = 'reg';

export const reqWSController: TWSController = (
  webSocketServer: WebSocketServer,
  webSocket: WebSocket,
  message: IWSMessage,
): void => {
  const data = JSON.parse(message.data);

  const handlerResult = reqCommandHandler(data);

  if (handlerResult.error) {
    return void webSocket.send(getResponse(message, handlerResult));
  }

  websocketToPlayerStore.add(webSocket, handlerResult.name);

  webSocket.send(getResponse(message, handlerResult));
  updateRoomController(webSocketServer);
  // TODO: update_winners
};

const getResponse = (
  message: IWSMessage,
  handlerResult: IReqResultData | IReqErrorData,
): string =>
  JSON.stringify({
    type: message.type,
    id: message.id,
    data: JSON.stringify(handlerResult),
  });
