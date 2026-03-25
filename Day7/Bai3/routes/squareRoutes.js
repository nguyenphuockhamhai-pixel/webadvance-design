const express = require('express');
const router = express.Router();
const squareController = require('../controllers/squareController');

// hiển thị form
router.get('/', squareController.showForm);

// xử lý tính toán
router.post('/calculate', squareController.calculateSquare);

module.exports = router;