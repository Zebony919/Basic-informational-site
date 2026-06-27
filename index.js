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

server.listen(3000, () => {
  console.log("Listening at localhost:3000");
});
