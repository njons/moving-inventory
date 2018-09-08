const test = require("tape");
const dbConnection = require("../src/db/db_connection");

test("tape is working", t => {
  t.equal("1", "1", "one is one");
  t.end();
});
