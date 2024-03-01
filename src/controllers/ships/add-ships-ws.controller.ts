import { WebSocket, WebSocketServer } from 'ws';
import { IWSMessage, TWSController } from '../../models/ws-controller.model.js';
import { IAddShipsData, addShipsHandler } from '../../handlers/ships/add-ships.handler.js';
import { startGameController } from './start-game.controller.js';

export const ADD_SHIPS_COMMAND_TYPE = 'add_ships';

export const addShipsWSController: TWSController = (
  wsServer: WebSocketServer,
  webSocket: WebSocket,
  message: IWSMessage,
): void => {
  const data: IAddShipsData = JSON.parse(message.data);

  addShipsHandler(data);
  startGameController(data.gameId);
};
