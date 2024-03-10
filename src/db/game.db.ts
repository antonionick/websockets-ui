import { IShip } from '../models/ship.model.js';
import {
  IGameDatabaseModel,
  IGameModel,
  IGamePlayerDatabaseModel,
  IGamePlayerModel,
} from '../models/game.model.js';

const gamesStorage: IGameDatabaseModel[] = [];

export const gameDatabase = {
  getGameById(gameId: number): IGameModel {
    return gamesStorage.find((game) => game.gameId === gameId)!;
  },
  createGame(playerNames: string[]): IGameModel {
    const lastGameId = gamesStorage[gamesStorage.length - 1]?.gameId;
    const gameId = (lastGameId ?? 0) + 1;

    const gamePlayers: IGamePlayerModel[] = playerNames.map((playerName, index) => ({
      playerName,
      playerId: index,
    }));

    const game = {
      gameId,
      players: gamePlayers,
    } as IGameDatabaseModel;

    gamesStorage.push(game);

    return game;
  },
  addShips(gameId: number, playerId: number, ships: IShip[]): void {
    const game = this.getGameById(gameId)!;
    const player = game.players.find(
      (player) => player.playerId === playerId,
    ) as IGamePlayerDatabaseModel;

    player.ships = ships;
  },
  updateCurrentPlayer(gameId: number, currentPlayer: number): void {
    const game = this.getGameById(gameId)! as IGameDatabaseModel;
    game.currentPlayer = currentPlayer;
  }
};
