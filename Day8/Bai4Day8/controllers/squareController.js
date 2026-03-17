const squareModel = require('../models/square');

exports.showForm = (req, res) => res.render('index', { side: null, perimeter: null, area: null, error: null });

exports.calculateSquare = async (req, res) => {
    const side = parseFloat(req.body.sideLength);

    if (!side || side <= 0) 
        return res.render('index', { side: null, perimeter: null, area: null, error: 'Cạnh phải lớn hơn 0!' });

    const p = 4 * side;
    const a = side * side;

    try {
        await squareModel.saveSquareData(side, p, a);
        res.render('index', { side, perimeter: p, area: a, error: null });
    } catch (error) {
        console.error("Database Error:", error.message);
        // Vẫn hiện đáp án nhưng báo lỗi không lưu được vào DB
        res.render('index', { side, perimeter: p, area: a, error: 'Tính xong nhưng không lưu được vào Database (Kiểm tra lại bảng squares)!' });
    }
};