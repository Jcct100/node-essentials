const zlib = require("zlib");
const fs = require("fs");

//this is the gzip algorithm
const gzip = zlib.createGzip();

const input = fs.createReadStream("hello.html");
const output = fs.createWriteStream("hello.html.gz");

input.pipe(gzip).pipe(output);
