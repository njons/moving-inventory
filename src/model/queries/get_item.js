const dbConnection = require("../db/db_connection");

// 1. when user arrives at website, all listed items will show
const getAllItems = cb => {
  dbConnection.query(`SELECT * FROM items;`, (err, result) => {
    // get all items and deliver them to the views
    console.log("this is db result", result.rows);
    if (err) {
      cb("Error!", null);
    } else {
      cb(null, result.rows);
    }
  });
};

module.exports = getAllItems;
