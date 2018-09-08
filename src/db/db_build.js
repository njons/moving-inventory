const fs = require("fs");
const dbConnect = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const runDbBuild = cb => {
  dbConnect.query(sql, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      console.log(null, res);
    }
  });
};
