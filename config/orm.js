const db = require('./connection');

const burger_orm = {};

burger_orm.selectAll = async function () {
  const query = 'SELECT * FROM  burgers';
  const [rows] = await (await db()).query(query);
  return rows;
};

burger_orm.selectOne = async function (id) {
  const query = `SELECT * from burgers WHERE id = ?`;
  const connection = await db();
  const [rows] = await connection.query(query);
  return rows;
};

/**
 * burger is the burger object which has propertties  burger_name, devoured, which are the table cols in DB.
 */
burger_orm.insertOne = async function (burger) {
  const query = `INSERT INTO burgers SET ?`;
  const connection = await db();
  const [rows] = await connection.query(query, burger);
  return rows.insertId;
};

/**
 * burger is the burger object which has propertties  burger_name, devoured, which are the table cols in DB.
 */
burger_orm.updateOne = async function ({ burger_name, devoured, id }) {
  const query = `UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?`;
  const connection = await db();
  const [rows] = await connection.query(query, [burger_name, devoured, id]);
};

module.exports = burger_orm;
