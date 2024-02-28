import { gameDatabase } from '../../db/game.db.js';
import { IGameModel } from '../../models/game.model.js';

export const createGameHandler = (playerNames: string[]): IGameModel =>
  gameDatabase.createGame(playerNames);
