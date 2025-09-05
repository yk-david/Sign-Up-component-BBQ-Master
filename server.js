import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith === "/api") {
    //
  } else if (!req.url.startsWith("/api")) {
    return await serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () => console.log(`Server runs now on ${PORT}`));
