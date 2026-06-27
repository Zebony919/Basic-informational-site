const router = require("express");
const indexRouter = router();
const path = require("path");

indexRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

indexRouter.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../about.html"));
});

indexRouter.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../contact.html"));
});

indexRouter.use((req, res) => {
  res.sendFile(path.join(__dirname, "../404.html"));
});

module.exports = indexRouter;
