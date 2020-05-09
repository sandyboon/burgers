const mysql = require('mysql2/promise');

let connection = null;

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
};

mysql
  .createConnection(dbConfig)
  .then((conn) => {
    connection = conn;
    console.log('Connected to database with connection id :' + conn.threadId);
  })
  .catch((err) => console.log(err));

module.exports;
