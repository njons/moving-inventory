const dbConnection = require("../db/db_connection");

// 1. when user arrives at website, all listed items will show
const getAllItems = cb => {
  dbConnection.query(`SELECT * FROM items;`, (err, items) => {
    // get all items and deliver them to the views
    console.log("this is db result", items.rows);
    if (err) {
      cb("Error!", null);
    } else {
      cb(null, items.rows);
    }
  });
};

// 2. when user arrives at website, all images for each item will show
const getAllImgs = cb => {
  dbConnection.query(
    `SELECT images.img, images.position FROM images INNER JOIN items ON items.id = images.item_id;`,
    (err, images) => {
      if (err) {
        cb("Error!", null);
      } else {
        console.log(`these are all images for each item:`, images.rows);
      }
    }
  );
};

// 3. when user arrives at website, all categories belonging to those items will show
const getAllCategories = cb => {
  dbConnection.query(
    `SELECT categories.type FROM categories INNER JOIN items ON items.category_id = categories.id;`,
    (err, categories) => {
      if (err) {
        cb("Error!", null);
      } else {
        console.log(`these are all categories with items:`, categories.rows);
      }
    }
  );
};

// 4. when user arrives at website, all people who have claimed specific items will show
const getAllOwners = cb => {
  dbConnection.query(
    `SELECT users.name FROM users INNER JOIN items ON items.user_id = users.id;`,
    (err, owners) => {
      if (err) {
        cb("Error!", null);
      } else {
        console.log(`these are all categories with items:`, owners.rows);
      }
    }
  );
};

// get users names for all items
// `SELECT users.name FROM users INNER JOIN items ON items.user_id = users.id;`
// if person = dispaly name and show taken div
// if null = show no name and no taken

// get category types for all items
// `SELECT categories.type FROM categories INNER JOIN items ON items.category_id = categories.id;`
// display all relevant categories to hold

// get all images for each item
// `SELECT images.img, images.position FROM images INNER JOIN items ON items.id = images.item_id;`

module.exports = { getAllItems, getAllImgs, getAllCategories, getAllOwners };
