import { IGameModel, IGamePlayerModel } from '../models/game.model.js';

const gamesStorage: IGameModel[] = [];

export const gameDatabase = {
  createGame(playerNames: string[]): IGameModel {
    const lastGameId = gamesStorage[gamesStorage.length - 1]?.gameId;
    const gameId = (lastGameId ?? 0) + 1;

    const gamePlayers: IGamePlayerModel[] = playerNames.map((playerName, index) => ({
      playerName,
      playerId: index,
    }));

    return {
      gameId,
      players: gamePlayers,
    };
  },
};
