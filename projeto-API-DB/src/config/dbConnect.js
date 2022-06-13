const mongoose = require ("mongoose")

mongoose.connect("mongodb+srv://NathCaldas:Bento26@cluster0.5ldtt.mongodb.net/reprograma")

let db = mongoose.connection

module.exports = db
