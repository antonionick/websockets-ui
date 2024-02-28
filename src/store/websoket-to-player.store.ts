import { WebSocket } from 'ws';

const webSocketToPlayerNameMap = new Map<WebSocket, string>();

export const websocketToPlayerStore = {
  add(webSocket: WebSocket, name: string): void {
    webSocketToPlayerNameMap.set(webSocket, name);
  },
  getPlayerNameByWebSocket(webSocket: WebSocket): string {
    return webSocketToPlayerNameMap.get(webSocket)!;
  },
  getWebSocketByPlayerName(playerName: string): WebSocket {
    let webSocket: WebSocket;

    webSocketToPlayerNameMap.forEach((value, key) => {
      if (webSocket) {
        return;
      }

      if (value === playerName) {
        webSocket = key;
      }
    });

    return webSocket!;
  },
};
