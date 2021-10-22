const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'RockyRanch88',
    database: 'election'
  },
  console.log('Connection to election database.')
);

module.exports =db;