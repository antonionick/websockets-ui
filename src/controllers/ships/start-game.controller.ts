import { startGameHandler } from '../../handlers/ships/start-game.handler.js';
import { websocketToPlayerStore } from '../../store/websoket-to-player.store.js';

const START_GAME_COMMAND_TYPE = 'start_game';

export const startGameController = (gameId: number): void => {
  const result = startGameHandler(gameId);

  if (result == null) {
    return;
  }

  result.forEach((value) => {
    const websocket = websocketToPlayerStore.getWebSocketByPlayerName(value.playerName);

    const response = JSON.stringify({
      type: START_GAME_COMMAND_TYPE,
      data: JSON.stringify({
        currentPlayerIndex: value.playerId,
        ships: value.ships,
      }),
      id: 0,
    });

    websocket.send(response);
  });
};
