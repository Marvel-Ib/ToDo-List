const Pool = require("pg").Pool;

const pool = new Pool({
  user: "USER",
  password: "USERPASSWORD",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
