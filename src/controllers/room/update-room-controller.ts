import { WebSocketServer } from 'ws';
import { roomsDatabase } from '../../db/rooms.db.js';

const UPDATE_ROOM_COMMAND_TYPE = 'update_room';

export const updateRoomController = (webSocketServer: WebSocketServer): void => {
  const roomsWithOnePlayer = roomsDatabase.getRoomsWithOnePlayer();

  const response = JSON.stringify({
    type: UPDATE_ROOM_COMMAND_TYPE,
    id: 0,
    data: JSON.stringify(roomsWithOnePlayer),
  });

  webSocketServer.clients.forEach((webSocket) => webSocket.send(response));
};
