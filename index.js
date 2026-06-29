const express = require("express");
const server = express();
const path = require("node:path");
const reserves = require("./routes/data.json");

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(express.static("public"));
server.use(express.json());

const indexRouter = require("./routes/indexRouter.js");
const authorRouter = require("./routes/authorRouter.js");
const bookRouter = require("./routes/bookRouter.js");

server.use("/authors", authorRouter);
server.use("/books", bookRouter);
server.use("/", indexRouter);

server.use((err, req, res, next) => {
  console.error(err);
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
});

server.listen(3000, () => {
  console.log("Listening at localhost:3000");
});
