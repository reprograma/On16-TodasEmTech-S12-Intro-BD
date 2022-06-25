const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema (
    {
        id:{type: String},
        title:{type: String, required: true},
        category:{type: String, required: true},
        launchYear:{type: String, required: true},
        platforms:{type: String, required: true},
        developerStudio:{type: String, required: true},
})

const games = mongoose.model('games', gamesSchema);
module.exports = games;