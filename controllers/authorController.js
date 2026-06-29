const authorData = require("../routes/authorData.js");
const CustomNotFoundError = require("../errors/CustomNotFoundError.js");

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  try {
    const author = await authorData.getAuthorById(Number(authorId));

    if (!author) {
      throw new CustomNotFoundError("Author Not Found");
    }

    res.status(200).send(`Author Name: ${author.name}`);
  } catch (error) {
    console.error("Error retrieving Author", error);
    res.status(500).send("Internal Server Error");
  }
}

async function getAuthorByName(req, res) {
  const { authorName } = req.params;

  try {
    const author = await authorData.getAuthorByName(authorName);

    if (!author) {
      throw new CustomNotFoundError("Author Not Found");
    }

    res.status(200).send(`Author Name: ${author.name}`);
  } catch (error) {
    console.error("Error retrieving Author", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { getAuthorById, getAuthorByName };
