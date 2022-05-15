const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE city (
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

let getCity = async () => {
  const sql = `SELECT * FROM city`;
  return await con.query(sql);
};

async function getUser(city) {
  let sql;
  if(user.userId) {
    sql = `SELECT * FROM city
      WHERE city_id = ${user.userId}
    `;
  } else {
    sql = `SELECT * FROM city
      WHERE username = "${user.username}"
    `;
  }

  return await con.query(sql);
}

async function editCity(user) {
  const sql = `UPDATE city SET
    city = "${user.userName}"
    WHERE user_id = ${user.userId}
  `;
  const update = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
}