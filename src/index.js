const express = require("express");

const app = express();

app.get("/node", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(3333, function () {
  console.log("Api started");
});
