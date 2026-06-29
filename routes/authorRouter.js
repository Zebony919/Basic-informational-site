const router = require("express");
const authorRouter = router();
const {
  getAuthorById,
  getAuthorByName,
} = require("../controllers/authorController.js");

function middleWare(req, res, next) {
  console.log("Middleware function");
  req.customProperty = "MiddleWareCustomProperty";
  next();
}

authorRouter.use(middleWare);

authorRouter.get("/name/:authorName", getAuthorByName);

authorRouter.get("/", (req, res) => {
  res.send("All Authors");
});

authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
