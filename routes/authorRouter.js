const router = require("express");
const authorRouter = router();

authorRouter.get("/", (req, res) => {
  res.send("All Authors");
});

authorRouter.get("/:authorId", (req, res) => {
  const authorInfo = {
    authorId: req.params.authorId,
  };
  res.send(`Author ID: ${authorInfo.authorId}`);
});

module.exports = authorRouter;
