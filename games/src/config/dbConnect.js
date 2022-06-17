const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://login:<password>@cluster0.ayoog.mongodb.net/reprograma');

let db = mongoose.connection;

module.exports = db;