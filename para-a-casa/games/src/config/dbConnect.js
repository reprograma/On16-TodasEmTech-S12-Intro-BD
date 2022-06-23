const mongoose = require ("mongoose")
mongoose.connect('mongodb+srv://CDias:@cluster0.6yb8f.mongodb.net/reprograma')
let db = mongoose.connection
module.exports = db;