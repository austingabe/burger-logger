# burger-logger
A burger logger using MySQL, Node, Express, Handlebars and an ORM following the MVC design pattern. Node and MySQL are used to query and route data in burger-logger, and Handlebars generates to the HTML page.

## Description
This application can be used by anyone who would like to log the burgers that they want to eat or have eaten. If the user would like, they can also use it to log other foods as well.

## Installation
In order to install the necessary packages, run `npm install` from the command line while inside the root directory.<br>
Documentation for `MySQL`: (https://www.npmjs.com/package/mysql)<br>
Documentation for `Express`: (https://www.npmjs.com/package/express)<br>
Documentation for `Express Handlebars`: (https://www.npmjs.com/package/express-handlebars)<br>
Documentation for `Dotenv`: (https://www.npmjs.com/package/dotenv)

## Usage
Once all dependencies are installed, the `schema.sql` file can be executed within MySQL to create the database and its corresponding tables. The `seed.sql` file can be executed as well if the user would like to pre-populate the database.<br>
If the user is utilizing a Mac OS, they can take the following steps to create the database and pre-populate from the command line:<br>
* In the `db` folder of the application, start MySQL command line tool and log in: `mysql -u root -p`.
* With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run the schema file and all of its queries, creating the database.
* The database can be pre-populated by running `source seeds.sql`.
* Close out of the MySQL command line tool: `exit`.<br>

Once the database is created and pre-populated (optional), ensure that the user's MySQL password is entered into its corresponding section within `server.js` or create a `.env` file referring to the user's `PASSWORD`. From there, run `node server.js` from the root directory. Navigate to the localhost location in your browser, and the application will appear along with any pre-populated burger data. From there, the user can add and delete burgers as well as change the "devoured" status of each existing burger.

## Support
For any questions, please contact austinlee721@gmail.com