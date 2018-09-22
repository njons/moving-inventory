const getAllItems = require("../model/queries/get_item");

// handler for home page

exports.get = (req, res) => {
  getAllItems((err, result) => {
    console.log("this is allitems rows: ", result);
    const items = result;
    res.render("home", { items });
  });

  // getAllCategories((err, result) => {
  //   console.log(result);
  //   const categories = result.rows;
  //   res.render("home", { categories });
  // })
};

// decide functionality (link to post/get requests and queries)
