// Requiring .env file for password
require("dotenv").config();
// Set up MySQL connection
const mysql = require("mysql");

// Checking to see if server contains JAWSDB_URL environmental variable. If not, local database is used
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "burgers_db"
  });
};

// Make connection
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;