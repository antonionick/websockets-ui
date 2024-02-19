import { playersDatabase } from '../../db/players.db.js';

interface IReqData {
  name: string;
  password: string;
}

export interface IReqResultData {
  error: false;
  name: string;
  index: number;
}

export interface IReqErrorData {
  error: true;
  errorText: string;
}

export const reqCommandHandler = (data: IReqData): IReqResultData | IReqErrorData => {
  const doesExist = playersDatabase.doesPlayerExist(data.name);
  if (doesExist) {
    const resultData: IReqErrorData = {
      error: true,
      errorText: 'Player already exists',
    };

    return resultData;
  }

  const index = playersDatabase.addPlayer(data);
  const resultData: IReqResultData = {
    index,
    name: data.name,
    error: false,
  };

  return resultData;
};
