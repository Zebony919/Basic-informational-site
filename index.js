const express = require("express");
const server = express();
const path = require("path");
const reserves = require("./routes/data.json");

server.use(express.static("public"));
server.use(express.json());

const indexRouter = require("./routes/indexRouter.js");
const authorRouter = require("./routes/authorRouter.js");
const bookRouter = require("./routes/bookRouter.js");

server.use("/authors", authorRouter);
server.use("/books", bookRouter);
server.use("/", indexRouter);

server.use((req, res, next) => {
  throw new Error("OH NO!");
});

server.use((err, req, res, next) => {
  console.error(err);
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
});

server.listen(3000, () => {
  console.log("Listening at localhost:3000");
});
