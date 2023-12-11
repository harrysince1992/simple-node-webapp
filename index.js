const express = require("express");
var app = express();
const PORT = 8081;

app.get("/", (req, res) => {
  res.send("Hello from node app!!");
});

app.get("/about", (req, res) => {
  res.send("About page!!");
  res.status(200);
});

// adding a comment

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
