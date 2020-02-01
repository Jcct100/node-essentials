//node js is asynchronous event driven

const fs = require("fs");

const watcher = fs.watch("event.js");

watcher.on("change", () => {
  console.log("file has changed");
});
