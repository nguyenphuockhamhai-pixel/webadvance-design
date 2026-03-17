const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Cấu hình để đọc dữ liệu từ Form (POST request)
app.use(express.urlencoded({ extended: true }));

// Thiết lập EJS làm template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Sử dụng định tuyến sản phẩm
app.use('/', productRoutes);

// Lắng nghe cổng
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});