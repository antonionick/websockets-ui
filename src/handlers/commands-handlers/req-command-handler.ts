import { WebSocket } from 'ws';
import { playersDatabase } from '../../db/players.db.js';
import { TCommandHandler } from '../../models/command-handler.model.js';

interface IReqData {
  name: string;
  password: string;
}

interface IReqResultData {
  name: string;
  index: number;
  error: boolean;
  errorText?: string;
}

export const REQ_COMMAND_TYPE = 'reg';

export const reqCommandHandler: TCommandHandler = (
  webSocket: WebSocket,
  message: string,
): string => {
  const data: IReqData = JSON.parse(message);

  let index = playersDatabase.getPlayerIndex(data.name);

  if (index === -1) {
    index = playersDatabase.addPlayer(data);
  }

  const resultData: IReqResultData = {
    index,
    name: data.name,
    error: false,
  };

  return JSON.stringify(resultData);
};
