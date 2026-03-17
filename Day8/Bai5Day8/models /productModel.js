// Model: Nơi tập trung xử lý dữ liệu và truy vấn Database
const db = require('../config/data');

const Product = {
  // Lấy toàn bộ danh sách sản phẩm
  getAllProducts: (callback) => {
    db.query('SELECT * FROM product', (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
  
  // Thêm sản phẩm mới vào bảng
  create: (data, callback) => {
    const query = 'INSERT INTO product (name, price, description) VALUES (?, ?, ?)';
    db.query(query, [data.name, data.price, data.description], callback);
  },

  // Xóa sản phẩm dựa theo ID
  delete: (id, callback) => {
    db.query('DELETE FROM product WHERE id = ?', [id], callback);
  }
};

module.exports = Product;