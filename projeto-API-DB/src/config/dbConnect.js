const mongoose = require ("mongoose");

mongoose.connect('mongodb+srv://andrezapipolo:Shurim88@cluster0.ahda7mk.mongodb.net/reprograma');

let db = mongoose.connection;

module.exports = db;