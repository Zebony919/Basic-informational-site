const express = require("express");
const server = express();
const path = require("path");

const indexRouter = require("./routes/indexRouter.js");
const authorRouter = require("./routes/authorRouter.js");
const bookRouter = require("./routes/bookRouter.js");

server.use("/", indexRouter);
server.use("/authors", authorRouter);
server.use("/books", bookRouter);

server.listen(3000, () => {
  console.log("Listening at localhost:3000");
});
