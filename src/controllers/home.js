const queries = require("../model/queries/get_item");

// handler for home page

exports.get = (req, res) => {
  console.log("this is req:", req);
  res.render("home");
  queries.getAllItems((err, result) => {
    console.log("this is result:", result);
  });
};

// decide functionality (link to post/get requests and queries)
