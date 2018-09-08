const fs = require("fs");
const path = require("path");
const router = require("./router");

const homeRoute = (req, res) => {
  fs.readFile(
    path.join(__dirname, "..", "public", "index.html"),
    (err, file) => {
      if (err) {
        res.writeHead(500, { "Content-type": "text/html" });
        res.end(`things ain't right with this server!`);
      } else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(file);
      }
    }
  );
};

module.exports = { homeRoute };
