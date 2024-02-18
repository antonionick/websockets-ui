import { WebSocketServer, WebSocket } from 'ws';
import { wsMessageControllerFabric } from '../controllers/ws-message-controller.js';

export const createWebsocketServer = (port: number): void => {
  console.log(`Start web socket server on the ${port} port!`);
  const wsServer = new WebSocketServer({ port, clientTracking: true });

  wsServer.on('connection', (webSocket: WebSocket) =>
    webSocket.on('message', wsMessageControllerFabric(wsServer)),
  );
};
