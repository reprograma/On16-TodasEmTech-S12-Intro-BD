const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://mmarimonteiro:<password>@cluster0.amlli.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;