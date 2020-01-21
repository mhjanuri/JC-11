const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "!Anakharam123",
  database: "bioskopdb",
  port: "3306"
});

module.exports = db;
