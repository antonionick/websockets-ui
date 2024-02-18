import { WebSocket } from 'ws';
import { playersDatabase } from '../../db/players.db.js';
import { roomWSControllerFabric } from '../../controllers/room-ws-controller.js';

interface IReqData {
  name: string;
  password: string;
}

interface IReqResultData {
  name: string;
  index: number;
}

interface IReqErrorData {
  error: true;
  errorText: string;
}

export const REQ_COMMAND_TYPE = 'reg';

export const reqCommandHandler = (
  webSocket: WebSocket,
  message: string,
): string => {
  const data: IReqData = JSON.parse(message);

  const doesExist = playersDatabase.doesPlayerExist(data.name);
  if (doesExist) {
    const resultData: IReqErrorData = {
      error: true,
      errorText: 'Player already exists',
    };

    return JSON.stringify(resultData);
  }

  const index = playersDatabase.addPlayer(data);
  const resultData: IReqResultData = {
    index,
    name: data.name,
  };

  webSocket.on('message', roomWSControllerFabric(data));

  return JSON.stringify(resultData);
};
