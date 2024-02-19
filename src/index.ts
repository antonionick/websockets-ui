import { createHttpServer } from './servers/http.server.js';
import { createWebsocketServer } from './servers/wb.server.js';

const HTTP_PORT = 8181;
const WS_PORT = 3000;

createHttpServer(HTTP_PORT);
createWebsocketServer(WS_PORT);
