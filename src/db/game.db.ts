import { IShip } from '../models/ship.model.js';
import { IGameModel, IGamePlayerModel } from '../models/game.model.js';

interface IGameDatabaseModel extends IGameModel {
  players: IGamePlayerDatabaseModel[];
}

interface IGamePlayerDatabaseModel extends IGamePlayerModel {
  ships: IShip[];
}

const gamesStorage: IGameDatabaseModel[] = [];

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
  addShips(gameId: number, playerId: number, ships: IShip[]): void {
    const game = gamesStorage.find((game) => game.gameId === gameId)!;
    const player = game.players.find(
      (player) => player.playerId === playerId,
    ) as IGamePlayerDatabaseModel;

    player.ships = ships;
  },
};
