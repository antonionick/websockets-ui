import { WebSocketServer, WebSocket } from 'ws';
import { playerWSController } from '../controllers/player-ws-controller.js';

export const createWebsocketServer = (port: number): WebSocketServer => {
  console.log(`Start web socket server on the ${port} port!`);
  const wsServer = new WebSocketServer({ port });

  wsServer.on('connection', webSocketConnectionHandler);

  return wsServer;
};

const webSocketConnectionHandler = (webSocket: WebSocket): void =>
  void webSocket.on('message', playerWSController);
