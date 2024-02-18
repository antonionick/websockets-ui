import { WebSocketServer, WebSocket } from 'ws';
import { wsServerController } from '../controllers/ws-server.controller.js';

export const createWebsocketServer = (port: number): WebSocketServer => {
  console.log(`Start web socket server on the ${port} port!`);
  const wsServer = new WebSocketServer({ port });

  wsServer.on('connection', webSocketConnectionHandler);

  return wsServer;
};

const webSocketConnectionHandler = (webSocket: WebSocket): void =>
  void webSocket.on('message', wsServerController);
