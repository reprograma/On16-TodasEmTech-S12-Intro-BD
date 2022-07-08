const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://Victoriana:83421230@cluster0.j04zm.mongodb.net/Reprograma");

let db = mongoose.connection;

module.exports = db;