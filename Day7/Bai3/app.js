require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const squareRoutes = require('./routes/squareRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/', squareRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});