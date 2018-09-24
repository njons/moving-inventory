const {
  getAllItems,
  getAllImgs,
  getAllCategories,
  getAllOwners
} = require("../model/queries/get_items");

// handler for home page

exports.get = (req, res) => {
  getAllItems((err, items) => {
    console.log("this is all items: ", items);
    const allItems = items;
    res.render("home", { allItems });
  });

  getAllImgs((err, images) => {
    console.log("this is all images: ", images);
    const allImages = images;
    res.render("home", { allImages });
  });

  getAllCategories((err, categories) => {
    console.log("this is all categories: ", categories);
    const allCategories = categories;
    res.render("home", { allCategories });
  });

  getAllOwners((err, owners) => {
    console.log("this is all owners: ", owners);
    const allOwners = owners;
    res.render("home", { allOwners });
  });

  // extract info and stick it in a nested object
  /* var render = {
    item_id: {
      name: x,
      description: x
    },
    imgs: {
      id: x, 
      path: x,
      position: x
    },
    category_type: x,
    owner_id: {
      name: x,
      email: x
    }
  }; */

  // getAllCategories((err, result) => {
  //   console.log(result);
  //   const categories = result.rows;
  //   res.render("home", { categories });
  // })
};

// decide functionality (link to post/get requests and queries)
