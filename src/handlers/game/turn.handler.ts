import { gameDatabase } from '../../db/game.db.js';
import { IGameDatabaseModel } from '../../models/game.model.js';

export const turnHandler = (gameId: number): number => {
  const game = gameDatabase.getGameById(gameId) as IGameDatabaseModel;

  let currentPlayer: number;
  if (game.currentPlayer == undefined) {
    currentPlayer = game.players[0].playerId;
  } else {
    currentPlayer = game.players.find((player) => player.playerId !== game.currentPlayer)!.playerId;
  }

  gameDatabase.updateCurrentPlayer(gameId, currentPlayer);

  return currentPlayer;
};

export const getPlayerNamesByGameId = (gameId: number): string[] => {
  const game = gameDatabase.getGameById(gameId)!;

  return game.players.map((player) => player.playerName);
};
