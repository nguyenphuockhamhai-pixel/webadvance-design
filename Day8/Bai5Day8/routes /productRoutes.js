// Routes: Định nghĩa các đường dẫn (URL) của ứng dụng
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Đường dẫn trang chủ - Hiển thị danh sách (GET)
router.get('/', productController.getProducts);
// Đường dẫn thêm sản phẩm - Nhận dữ liệu từ form (POST)
router.post('/add', productController.addProduct);
// Đường dẫn xóa sản phẩm - Sử dụng tham số id trên URL (GET)
router.get('/delete/:id', productController.deleteProduct);

module.exports = router;