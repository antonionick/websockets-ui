import { WebSocket } from 'ws';

const webSocketToPlayerNameMap = new Map<WebSocket, string>();

export const websocketToPlayerStore = {
  add(webSocket: WebSocket, name: string): void {
    webSocketToPlayerNameMap.set(webSocket, name);
  },
  getPlayerNameByWebSocket(webSocket: WebSocket): string {
    return webSocketToPlayerNameMap.get(webSocket)!;
  },
};
