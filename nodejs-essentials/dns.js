const dns = require("dns");

dns.resolve("juniordevelopercentral.com", (err, value) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(value);
});
