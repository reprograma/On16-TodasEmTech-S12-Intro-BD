const mongoose = require ("mongoose");

mongoose.connect('mongodb+srv://sara12:j3woZpYZutpOlZsD@cluster0.ykga8c9.mongodb.net/reprograma');

let db = mongoose.connection;

module.exports = db;