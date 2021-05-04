//require the dotenv file to have the password
//fs require to read the files
require("dotenv").config();
const fs = require("fs");
//parsing the Json
//using fs to read in the database contants file
const dbConstants = JSON.parse(
  fs.readFileSync(`${__dirname}/databaseConstants.json`, {
    encoding: "utf-8",
  })
);
//using sync-mysql
const MySql = require("sync-mysql");
const connection = new MySql({
  password: process.env.DB_PASS,
  ...dbConstants,
});
//exporting everything to be able to use it
module.exports = connection;
