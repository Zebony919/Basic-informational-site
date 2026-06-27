const route = require("express");
const bookRouter = route();
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "./data.json");
const reserves = require("./data.json");

bookRouter.get("/", (req, res) => {
  res.send("All Books");
});

bookRouter.get("/:bookName/reserves", (req, res) => {
  const bookName = req.params.bookName;
  const bookReserves = reserves[bookName];

  if (bookReserves) {
    if (bookReserves.length > 0) {
      res.send(`Reserves for ${bookName}: ${bookReserves.join(", ")}`);
    } else {
      res.send(`No Reserves for ${bookName}`);
    }
  } else {
    res.status(404).send(`Book "${bookName}" not found in reserves.`);
  }
});

bookRouter.post("/:bookName/reserves", (req, res) => {
  const { bookName } = req.params;
  const { person } = req.body;

  if (reserves[bookName]) {
    reserves[bookName].push(person);
    fs.writeFileSync(dataPath, JSON.stringify(reserves, null, 2));

    res.send(
      `Successfully reserved ${bookName} to ${person}\nCurrent Reserved: ${reserves[bookName].join(", ")}`,
    );
  } else {
    res.send(`${bookName} does not exist.`);
  }
});

bookRouter.get("/:bookName", (req, res) => {
  res.send(`Book Name: ${req.params.bookName}`);
});

module.exports = bookRouter;
