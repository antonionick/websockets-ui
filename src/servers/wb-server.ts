import { WebSocketServer, WebSocket } from 'ws';
import { webSocketMessageHandler } from '../handlers/ws-message-controller.js';

export const createWebsocketServer = (port: number): WebSocketServer => {
  console.log(`Start web socket server on the ${port} port!`);
  const wsServer = new WebSocketServer({ port });

  wsServer.on('connection', webSocketConnectionHandler);

  return wsServer;
};

const webSocketConnectionHandler = (webSocket: WebSocket): void =>
  void webSocket.on('message', webSocketMessageHandler);
