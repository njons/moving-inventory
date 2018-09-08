const { homeRoute } = require("./handler");

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    homeRoute(req, res);
  }
};

module.exports = router;
