// Dependency
const express = require("express");
// Sets dynamic port
const PORT = process.env.PORT || 8080;
// Sets up Express app
const app = express();

// Sets up static files
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require("express-handlebars");
// "Main" file in Layouts directory is default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
const routes = require("./controllers/burgersController");
app.use(routes);

// Start our server so that it can begin listening to client requests
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});