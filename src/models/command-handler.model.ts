import { WebSocket } from 'ws';

export type TCommandHandler = (webSocket: WebSocket, data: string) => string;
