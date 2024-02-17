import { WebSocket, RawData } from 'ws';

export function webSocketMessageController(this: WebSocket, rawData: RawData): void {
  const stringData = rawData.toString();
  const data = JSON.parse(stringData);

  console.log(data);
}
