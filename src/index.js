const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (req, res) => {
  return res.json(["Course 1", "Course 2", "Course 3"]);
});

app.post("/courses", (req, res) => {
  return res.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

app.put("/courses/:id", (req, res) => {
  return res.json(["Course 6", "Course 2", "Course 3", "Course 4"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Course 6", "Course 7", "Course 3", "Course 4"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Course 6", "Course 7", "Course 4"]);
});

app.listen(3000, function () {
  console.log("Api started");
});
