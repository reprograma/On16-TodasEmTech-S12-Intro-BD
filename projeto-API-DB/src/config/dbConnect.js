const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://NilvaReprograma:793098Np@@cluster0.7rbouil.mongodb.net/reprograma")

let db = mongoose.connection;

module.exports = db;
