import { IPlayerModel } from '../models/player.model.js';

const playersStorage: IPlayerModel[] = [];

export const playersDatabase = {
  doesPlayerExist(name: string): boolean {
    return !!playersStorage.find((player) => player.name === name);
  },
  addPlayer(player: IPlayerModel): number {
    playersStorage.push(player);

    return playersStorage.length - 1;
  },
};
