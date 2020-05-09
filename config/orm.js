const connection = require('./connection');

const burger_orm = {};

burger_orm.selectAll = async function () {
  const query = 'SELECT * FROM  burgers';
  const [rows] = await connection.query(query);
  return rows;
};

burger_orm.selectOne = async function (id) {
  const query = `SELECT * from burgers WHERE id = ?`;
  const [rows] = await connection.query(query);
  return rows;
};

/**
 * burger is the burger object which has propertties  burger_name, devoured, which are the table cols in DB.
 */
burger_orm.insertOne = async function (burger) {
  const query = `INSERT INTO burgers SET ?`;
  const { insertId } = await connection.query(query, burger);
  return insertId;
};

/**
 * burger is the burger object which has propertties  burger_name, devoured, which are the table cols in DB.
 */
burger_orm.updateOne = async function (burger) {
  const query = `UPDATE burgers SET ?`;
  const [rows] = await connection.query(query, burger);
};

module.exports = burger_orm;
