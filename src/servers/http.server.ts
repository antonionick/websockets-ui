import fs from 'fs/promises';
import path from 'path';
import http from 'http';

export const createHttpServer = (port: number): http.Server => {
  const httpServer = http.createServer(httpRequestHandler);

  console.log(`Start static http server on the ${port} port!`);
  httpServer.listen(port);

  return httpServer;
};

const httpRequestHandler = async (
  req: http.IncomingMessage,
  res: http.ServerResponse,
): Promise<void> => {
  const __dirname = path.resolve(path.dirname(''));
  const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);

  try {
    const data = await fs.readFile(file_path);
    res.writeHead(200);
    res.end(data);
  } catch (err) {
    res.writeHead(404);
    res.end(JSON.stringify(err));
  }
};
