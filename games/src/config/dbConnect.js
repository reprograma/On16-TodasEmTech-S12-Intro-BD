const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.ATLAS_LOGIN}:${process.env.ATLAS_PASSWORD}@cluster0.hgy1c7l.mongodb.net/week-12`)


let db = mongoose.connection;

module.exports = db