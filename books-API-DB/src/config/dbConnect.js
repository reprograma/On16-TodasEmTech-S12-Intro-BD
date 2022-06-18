const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://camisarp:Lu291215@cluster0.zeh2izl.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;