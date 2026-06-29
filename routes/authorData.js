const authors = [
  { id: 1, name: "James" },
  { id: 2, name: "Bryan" },
  { id: 3, name: "Peter" },
];

function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

function getAuthorByName(authorName) {
  return authors.find((author) => author.name === authorName);
}

module.exports = { getAuthorById, getAuthorByName };
