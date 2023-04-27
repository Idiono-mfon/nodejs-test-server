const express = require("express");
var testController = require("./controller/test-controller.js");

const app = express();

app.use("/test", testController);

app.get("/", function (req, res) {
  res.send("Server is up!");
});

app.listen(3000);
