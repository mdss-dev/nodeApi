const express = require("express");

const app = express();

app.get("/course", (req, res) => {
  return res.json(["Course 1", "Course 2", "Course 3"]);
});

app.post("/course", (req, res) => {
  return res.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

app.put("/course/:id", (req, res) => {
  return res.json(["Course 6", "Course 2", "Course 3", "Course 4"]);
});

app.patch("/course/:id", (req, res) => {
  return res.json(["Course 6", "Course 7", "Course 3", "Course 4"]);
});

app.delete("/course/:id", (req, res) => {
  return res.json(["Course 6", "Course 7", "Course 4"]);
});

app.listen(3000, function () {
  console.log("Api started");
});
