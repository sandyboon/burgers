const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'burgers_db',
  password: 'password',
};

let connection = null;

const getConnection = async function () {
  if (connection !== null) {
    return connection;
  } else {
    if (process.env.JAWSDB_URL) {
      connection = await mysql.createConnection(process.env.JAWSDB_URL);
    } else {
      connection = await mysql.createConnection(dbConfig);
    }

    console.log(
      'connected to database with conenction id :' + connection.threadId
    );
    return connection;
  }
};

// mysql
//   .createConnection(dbConfig)
//   .then((conn) => {
//     connection = conn;
//     console.log('Connected to database with connection id :' + conn.threadId);
//   })
//   .catch((err) => console.log(err));

module.exports = getConnection;
