const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://andrezapipolo:Shurim88@cluster0.ahda7mk.mongodb.net/games');

let db = mongoose.connection;

module.exports = db;