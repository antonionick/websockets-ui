import { getPlayerNamesByGameId, turnHandler } from '../../handlers/game/turn.handler.js';
import { websocketToPlayerStore } from '../../store/websoket-to-player.store.js';

const TURN_COMMAND_TYPE = 'turn';

export const turnController = (gameId: number): void => {
  const currentPlayer = turnHandler(gameId);
  const playerNames = getPlayerNamesByGameId(gameId);

  const response = JSON.stringify({
    type: TURN_COMMAND_TYPE,
    id: 0,
    data: JSON.stringify({
      currentPlayer,
    }),
  });

  for (const playerName of playerNames) {
    const webSocket = websocketToPlayerStore.getWebSocketByPlayerName(playerName);

    webSocket.send(response);
  }
};
