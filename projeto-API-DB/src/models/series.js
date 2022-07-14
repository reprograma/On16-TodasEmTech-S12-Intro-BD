const mongoose = require('mongoose')

//schema do ep
let episodeSchema = new mongoose.Schema(
    {
        id: {type: String, required: true},
        code: {type: String, required: true},
        name: {type: String, required: true},
        watched: {type: Boolean, required: true}
    }
)

// schema temporada
let seasonSchema = new mongoose.Schema(
    {
        id: {type: String, required: true},
        code: {type: String, required: true},
        episodes: {type: [episodeSchema]}   
    }
)

// schema serie
let serieSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        genre: {type: String, required: true},
        synopsis: {type: String, required: true},
        liked: {type: Boolean, required: true},
        seasons: {type: [seasonSchema]}
    }
)
const series = mongoose.model('series', serieSchema);


module.exports = series