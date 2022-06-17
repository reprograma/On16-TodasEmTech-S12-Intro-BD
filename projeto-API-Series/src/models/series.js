const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema (
    {
        id:{type: String},
        titulo:{type: String, required: true},
        category:{type: String, required: true},
        producer:{type: String, required: true},
        numberOfSeasons:{type: Number, required: true},
})

const series = mongoose.model('series', seriesSchema);
module.exports = series;