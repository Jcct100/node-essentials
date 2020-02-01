const net = require("net");

const server = net.createServer();

server.listen({
  host: "localhost",
  port: 8080
});

//get trigger when client connects
server.on("connection", client => {
  console.log("click has connected");
});
