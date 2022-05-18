const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE cities (
    city_id INT NOT NULL AUTO_INCREMENT,
    city VARCHAR(255) NOT NULL UNIQUE,
    country VARCHAR(255),
    zip_code NUMERIC,
	user_id INT,
    CONSTRAINT city_pk PRIMARY KEY(city_id),
	CONSTRAINT user_fk FOREIGN KEY(user_id) REFERENCES users(user_id)
  )`;
  await con.query(sql);
}

createTable();

let getUsers = async () => {
  const sql = `SELECT * FROM users`;
  return await con.query(sql);
};

let getCities = async () => {
  const sql = `SELECT * FROM cities`;
  return await con.query(sql);
};

async function getUser(user) {
  let sql;
  if(user.userId) {
    sql = `SELECT * FROM users
      WHERE user_id = ${user.userId}
    `;
  } else {
    sql = `SELECT * FROM users
      WHERE username = "${user.username}"
    `;
  }

  return await con.query(sql);
}

async function register(user) {

  const sql = `INSERT INTO cities (city, country)
    VALUES ("${user.username}", "${user.password}")
  `;

  const insert = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
}

module.exports = { getUsers, register, getUser, createTable, getCities };