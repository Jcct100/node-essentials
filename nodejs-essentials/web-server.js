const http = require("http");

const server = http.createServer((request, result) => {
  //send back in html
  result.writeHead(200, { "Content-type": "text/html" });
  //this is what you send back in html
  result.end("<h1>HELLO WORLD</h1>");
});

server.listen(8080, "localhost");
