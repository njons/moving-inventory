const fs = require("fs");
const dbConnection = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const runDbBuild = cb => {
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err, null);
    cb(null, res);
  });
};

module.exports = runDbBuild;
