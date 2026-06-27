const route = require("express");
const bookRouter = route();

bookRouter.get("/", (req, res) => {
  res.send("All Books");
});

bookRouter.get("/:bookName", (req, res) => {
  res.send(`Book Name: ${req.params.bookName}`);
});

module.exports = bookRouter;
