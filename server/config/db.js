require("dotenv").config();
const mysql = require("mysql2");
// DB server
const pool = mysql.createPool({

    host: 'localhost',
 
    user: 'root',
 
    password: '',

    database : 'cpoatennis',
 
  });


module.exports = pool.promise();