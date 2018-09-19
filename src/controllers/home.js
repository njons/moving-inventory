const getAllItems = require("../model/queries/get_item");

// handler for home page

exports.get = (req, res) => {
  res.render("home");
  getAllItems((err, result) => {
    console.log("this is result in the server:", result);
  });
};

// decide functionality (link to post/get requests and queries)
