const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://carolalves90:naogostodetomate@cluster0.pplg699.mongodb.net/reprograma")

let db = mongoose.connection;

module.exports = db;