const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

module.exports = {
    saveSquareData: async (s, p, a) =>
        pool.execute('INSERT INTO squares (sideLength, perimeter, area) VALUES (?, ?, ?)', [s, p, a])
};