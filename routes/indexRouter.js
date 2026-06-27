const router = require("express");
const indexRouter = router();
const path = require("path");

indexRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = indexRouter;
