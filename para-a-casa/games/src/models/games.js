const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        launchYear: { type: Number, required: true },
        consoles: { type: String, required: true },
        liked: { type: Boolean, required: true },
        likeGame: { type: Boolean, required: true },
    }
)

const games = mongoose.model('games', gameSchema);

module.exports = games;