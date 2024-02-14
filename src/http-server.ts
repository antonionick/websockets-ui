import fs from 'fs/promises';
import path from 'path';
import http from 'http';

export const httpServer = http.createServer(async (req, res) => {
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
});
