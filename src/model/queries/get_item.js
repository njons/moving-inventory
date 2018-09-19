const dbConnection = require("../db/db_connection");

const getAllItems = cb => {
  dbConnection.query(`SELECT * FROM items;`, (err, result) => {
    console.log(result);
    // 1. when user arrives at website, all listed items will show

    // get all items and deliver them to dom.js
  });
};
