const dbConnection = require("../db/db_connection");

const getAllItems = cb => {
  dbConnection.query(`SELECT * FROM items;`, (err, result) => {
    // 1. when user arrives at website, all listed items will show
    console.log("this is from db:", result);

    // get all items and deliver them to dom.js
  });
};

module.exports = getAllItems;
