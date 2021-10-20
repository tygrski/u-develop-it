const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extend: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
 console.log(rows);
});
// default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on pport ${PORT}`);
});

