const path = require("path");

const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "views", "index.html"));
};

module.exports = { getHome };
