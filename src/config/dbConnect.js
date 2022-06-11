const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://new-user25:reprograma123@cluster0.1vuycki.mongodb.net/Alura");

let db = mongoose.connection;


module.exports = db;
