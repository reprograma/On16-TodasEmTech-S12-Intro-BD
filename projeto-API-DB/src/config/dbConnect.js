const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://victoriascholte:KO3QoN86OkGslz7P@cluster0.xjdyw.mongodb.net/reprograma")

let db = mongoose.connection;

module.exports = db;