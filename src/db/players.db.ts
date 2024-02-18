import { IPlayerModel } from '../models/player.model.js';

const playersStorage: IPlayerModel[] = [];

export const playersDatabase = {
  doesPlayerExist(name: string): boolean {
    const index = this.getPlayerIndex(name);
    return index !== -1;
  },
  getPlayerIndex(name: string): number {
    return playersStorage.findIndex((player) => player.name === name);
  },
  addPlayer(player: IPlayerModel): number {
    playersStorage.push(player);

    return playersStorage.length - 1;
  },
};
