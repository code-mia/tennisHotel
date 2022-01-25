require("dotenv").config();
const mysql = require("mysql2");
// DB server
const pool = mysql.createPool({

    host: 'eu-cdbr-west-02.cleardb.net',
 
    user: 'b6b42b32d51358',
 
    password: 'ea3d0dec',

    database : 'heroku_04885c9fd9871f7',
 
  });

module.exports = pool.promise();