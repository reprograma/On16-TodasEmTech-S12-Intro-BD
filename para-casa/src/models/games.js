const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    id : {type : String},
    title : {type :String},
    launchYear : {type : String},
    console : { type : Array , "default" : [] }
})

const games = mongoose.model("games",gameSchema);

module.exports = games;