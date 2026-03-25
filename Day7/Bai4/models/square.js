const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

const saveSquareData = (side, perimeter, area) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO squares (side, perimeter, area) VALUES (?, ?, ?)';

        connection.query(sql, [side, perimeter, area], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

module.exports = {
    saveSquareData,
};