// Cấu hình kết nối cơ sở dữ liệu MySQL
const mysql = require('mysql2');

// kết nối đến database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'shop',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;