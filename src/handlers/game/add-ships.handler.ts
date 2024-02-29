import { gameDatabase } from '../../db/game.db.js';
import { IShip } from '../../models/ship.model.js';

export interface IAddShipsData {
  gameId: number;
  ships: IShip[];
  indexPlayer: number;
}

export const addShipsHandler = (shipsData: IAddShipsData): void =>
  gameDatabase.addShips(shipsData.gameId, shipsData.indexPlayer, shipsData.ships);
