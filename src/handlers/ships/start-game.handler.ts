import { gameDatabase } from '../../db/game.db.js';
import { IGameDatabaseModel, IGamePlayerDatabaseModel } from '../../models/game.model.js';

export const startGameHandler = (gameId: number): IGamePlayerDatabaseModel[] | null => {
  const game = gameDatabase.getGameById(gameId) as IGameDatabaseModel;

  const doesBothUsersHaveShips = game.players.every(
    (player) => !!player.ships,
  );

  return doesBothUsersHaveShips ? game.players : null;
};
