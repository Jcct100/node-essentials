const fs = require("fs");
const http = require("http");

//readFile uploads all the data in memory
//using stream to upload one at a time

const server = http.createServer((request, result) => {
  //   fs.readFile("./hello.html", (err, data) => {
  //     if (err) throw err;
  //     result.end(data);
  //   });
  const file = fs.createReadStream("./hello.html");
  file.pipe(result);
});

server.listen(8080, "localhost");
