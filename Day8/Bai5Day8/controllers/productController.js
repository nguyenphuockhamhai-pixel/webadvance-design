// Controller: Tiếp nhận request, xử lý logic và gọi Model/View tương ứng
const Product = require('../models/productModel');

// Hiển thị danh sách sản phẩm
exports.getProducts = (req, res) => {
  // Gọi Model để lấy dữ liệu
  Product.getAllProducts((err, products) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).send("Lỗi kết nối cơ sở dữ liệu");
    }
    res.render('product', { products });
  });
};

// Xử lý thêm sản phẩm
exports.addProduct = (req, res) => {
  // Lấy dữ liệu từ body của request (form gửi lên)
  const { name, price, description } = req.body;
  Product.create({ name, price, description }, (err) => {
    if (err) {
      return res.status(500).send("Lỗi khi thêm sản phẩm");
    }
    // Sau khi thêm xong, chuyển hướng người dùng về trang chủ
    res.redirect('/');
  });
};

// Xử lý xóa sản phẩm
exports.deleteProduct = (req, res) => {
  // Lấy ID từ tham số trên URL (:id)
  Product.delete(req.params.id, (err) => {
    if (err) {
      return res.status(500).send("Lỗi khi xóa sản phẩm");
    }
    res.redirect('/');
  });
};