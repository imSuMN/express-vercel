const express = require("express");

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hey this is my api Running");
});

app.get("/about", (req, res) => {
  res.send("This is my about page");
});

module.exports = app;
