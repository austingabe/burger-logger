// Import the ORM to create functions that will interact with the database
const orm = require("../config/orm.js");

const burger = {
  // Function that displays all current burgers to the page
  selectAll: cb => {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },
  // Function that adds a new burger. The variables cols and vals are arrays
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, res => {
      cb(res);
    });
  },
  // Function that updates the "devoured" state of a selected burger
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, res => {
      cb(res);
    });
  },
  // Function that deletes the selected burger
  deleteOne: (condition, cb) => {
    orm.deleteOne("burgers", condition, res => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;