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

let getCitys = async () => {
  const sql = `SELECT * FROM cities`;
  return await con.query(sql);
};

async function getCity(cit) {
  let sql;
  if(cit.cityId) {
    sql = `SELECT * FROM cities
      WHERE city_id = ${cit.cityId}
    `;
  } else {
    sql = `SELECT * FROM cities
      WHERE city = "${cit.city}"
    `;
  }

  return await con.query(sql);
}

async function register(cit) {
 
  const sql = `INSERT INTO cities (city, country)
    VALUES ("${cit.city}", "${cit.count}")
  `;

  const insert = await con.query(sql);
  const newCity = await getCity(cit);
  return newCity[0];
}

async function editCity(cit) {
  const sql = `UPDATE cities SET
    city = "${cit.cityName}"
    WHERE city_id = ${cit.cityId}
  `;
  const update = await con.query(sql);
  const newCity = await getCity(cit);
  return newCity[0];
}


module.exports = { getCitys, editCity, getCity, createTable };