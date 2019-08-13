const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
dotenv.config();

const server = express();
const port = process.env.PORT ? process.env.PORT : 3000;

server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/build/index.html");
});

server.get("/play", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/build/index.html");
});

server.get("/set-card-game", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/build/index.html");
});

server.get("/set-card-game/play", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/build/index.html");
});

server.use(express.static(__dirname + "/set-card-game/build"));
server.use(express.static(__dirname + "/set-card-game/public"));

(async () => {
  await server.listen(port);
  console.log(`> Ready: Server listening on http://localhost:${port}`);
})();
