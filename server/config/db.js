require("dotenv").config();
const mysql = require("mysql2");
// DB server
const pool = mysql.createPool({

    host: "eu-cdbr-west-02.cleardb.net",
 
    user: "b1bc4d96860b6a",
 
    password: "8392dca1",

    database : "heroku_9c574cbc768e03b",
 
  });

module.exports = pool.promise();