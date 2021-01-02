const mysql = require("mysql");
const util = require("util");

// SELECT * FROM usuarios; // consulta en crudo
// Query builder knex
// ORM Eloquent

let pool = mysql.createPool({
  host: process.env.DB_HOST || "us-cdbr-east-02.cleardb.com",
  password: process.env.DB_PASSWORD || "b1d6796d",
  user: process.env.DB_USER || "b66ea047d0d7df",
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || "heroku_60c72b60b19b114",
  connectionLimit: 10,
});
pool.query = util.promisify(pool.query);
module.exports = pool;
