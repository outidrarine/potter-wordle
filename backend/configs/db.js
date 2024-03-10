const mysql2 = require("mysql2");
var fs = require("fs");

require("dotenv").config();

const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  ssl: {
    ca: fs.readFileSync(__dirname + "/ca.pem"),
  },
  multipleStatements: true,
  connectionLimit: 100,
});

module.exports = pool;
