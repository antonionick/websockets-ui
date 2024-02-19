import { WebSocketServer } from 'ws';
import { updateWinnersCommandHandler } from '../../handlers/player/update-winners-command.handler.js';

const UPDATE_WINNERS_COMMAND_TYPE = 'update_winners';

export const updateWinnersController = (webSocketServer: WebSocketServer): void => {
  const winnersData = updateWinnersCommandHandler();

  const response = JSON.stringify({
    id: 0,
    type: UPDATE_WINNERS_COMMAND_TYPE,
    data: JSON.stringify(winnersData),
  });

  webSocketServer.clients.forEach((webSocket) => webSocket.send(response));
};
