const crypto = require("crypto");

const secret = "secret key";

const hash = crypto
  .createHash("md5", secret)
  .update("password")
  .digest("hex");

console.log(hash);
