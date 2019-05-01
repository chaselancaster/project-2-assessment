const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3030;
const toDo = require("./models/todo");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs", {
    toDo
  });
});

app.post("/", (req, res) => {
  console.log(req.body, "<--- req.body");
  req.body.done = false;
  toDo.push(req.body);
  res.redirect("/");
});

app.listen(port, function() {
  console.log("App is running on port: ", port);
});

module.exports = app;
