const mongoose = require ("mongoose")

//mongoose.connect('mongodb+srv://username:<password>@cluster0.1vuycki.mongodb.net/?retryWrites=true&w=majority');

mongoose.connect('mongodb+srv://claudianefidelis:<password>@cluster0.ijgvj.mongodb.net/?retryWrites=true&w=majority');

let db = mongoose.connection;

module.exports = db;