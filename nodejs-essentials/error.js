//in order to handle errors you need everything in a try catch block

const dns = require("dns");

try {
  dns.lookup("juniordevelopercentralcom", (err, value) => {
    if (err) {
      console.log(`there is an error, the message is ${err}`);
      return;
    }

    console.log(value);
  });
} catch (err) {
  console.log(err);
}
