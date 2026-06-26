const express = require('express');
const server = express();
const path = require('path');

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

server.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"));
});

server.use((req, res) => {
    res.sendFile(path.join(__dirname, "404.html"));
});

server.listen(3000, () => {
    console.log("Listening at localhost:3000");
})