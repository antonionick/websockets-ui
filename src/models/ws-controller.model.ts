import { WebSocket, WebSocketServer } from 'ws';

export interface IWSMessage {
  type: string;
  data: string;
  id: 0;
}

export type TWSController = (
  wsServer: WebSocketServer,
  webSocket: WebSocket,
  message: IWSMessage,
) => void;
