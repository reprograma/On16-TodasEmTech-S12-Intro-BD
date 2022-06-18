const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://leticia:xxxxxxxxxx@cluster0.qyzo3.mongodb.net/Reprograma')

let db = mongoose.connection;

module.exports = db;