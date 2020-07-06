// Import MySQL connection
const connection = require("../config/connection.js");

// In order to write a query to pass three values into the MySQL query, we need 3 question marks
// Helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string
// ["?", "?", "?"].toString() => "?,?,?";
const printQuestionMarks = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = ob => {
  let arr = [];

  // Loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces, add quotations (Flying Dutchman => 'Flying Dutchman')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Flying Dutchman'} => ["name='Flying Dutchman'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(`${key} = ${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all SQL statement functions
const orm = {
  // Function displaying all burgers to the page
  selectAll: (tableInput, cb) => {
    const queryString = `SELECT * FROM ${tableInput};`;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Function adding new burger
  insertOne: (table, cols, vals, cb) => {
    const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // Function updating "devoured" state of selected burger
  // Example of objColVals would be {name: hamburger, devoured: true}
  updateOne: (table, objColVals, condition, cb) => {
    const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`;

    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // Function deleting selected burger
  deleteOne: (table, condition, cb) => {
    const queryString = `DELETE FROM ${table} WHERE ${condition};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js)
module.exports = orm;