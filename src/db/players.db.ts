import { IPlayerModel } from '../models/player.model.js';

const playersStorage: IPlayerModel[] = [];

export const playersDatabase = {
  getPlayerIndex(name: string): number {
    return playersStorage.findIndex((player) => player.name === name);
  },
  addPlayer(player: IPlayerModel): number {
    playersStorage.push(player);

    return playersStorage.length - 1;
  },
};
