import { IShip } from './ship.model.js';

export interface IGameModel {
  gameId: number;
  players: IGamePlayerModel[];
}

export interface IGamePlayerModel {
  playerId: number;
  playerName: string;
}

export interface IGameDatabaseModel extends IGameModel {
  players: IGamePlayerDatabaseModel[];
}

export interface IGamePlayerDatabaseModel extends IGamePlayerModel {
  ships: IShip[];
}
