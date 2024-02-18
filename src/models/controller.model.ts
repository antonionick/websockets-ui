import { WebSocket } from 'ws';

export interface IWSMessage {
  type: string;
  data: string;
  id: 0;
}

export type TController = (webSocket: WebSocket, message: IWSMessage) => void;
