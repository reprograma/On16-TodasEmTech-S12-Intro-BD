const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://bcostabaron:ortiga18@cluster0.hgy1c7l.mongodb.net/week-12')

let db = mongoose.connection;

module.exports = db