import { createGameHandler } from '../../handlers/room/create-game.handler.js';
import { IRoomModel } from '../../models/room.model.js';
import { websocketToPlayerStore } from '../../store/websoket-to-player.store.js';

const CREATE_GAME_COMMAND_TYPE = 'create_game';

export const createGameController = (room: IRoomModel): void => {
  const playerNames = room.roomUsers.map((user) => user.name);
  const gameModel = createGameHandler(playerNames);

  for (const player of gameModel.players) {
    const playerWebSocket = websocketToPlayerStore.getWebSocketByPlayerName(player.playerName);

    const response = JSON.stringify({
      type: CREATE_GAME_COMMAND_TYPE,
      data: JSON.stringify({
        idGame: gameModel.gameId,
        idPlayer: player.playerId,
      }),
      id: 0,
    });

    playerWebSocket.send(response);
  }
};
