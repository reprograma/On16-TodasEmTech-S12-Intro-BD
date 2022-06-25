const mongoose = require('mongoose');
 
const gameSchema = new mongoose.Schema({
    id: {type: String}, // id n é requerido
    title:{type: String, required: true},
    launchYear:{type: Number, required: true},
    consoles:{type: Array, required: true},
    liked:{type: Boolean, required: true}
});
 
 
 
const games= mongoose.model('games',gameSchema);
 
module.exports = games;



/* [
    {
        "id": 1,
        "title": "Fall Guys",
        "launchYear": "2020",
        "consoles": [
            "ps4"
        ],
        "liked": true
    },
    {
        "id": 2,
        "title": "Mario Kart",
        "launchYear": "1992",
        "consoles": [
            "superNintendo",
            "nintendo64",
            "nintendoSwitch"
        ],
        "liked": false
    },
    {
        "id": 3,
        "title": "Super Smash Bross",
        "launchYear": "1999",
        "consoles": [
            "nintendo64",
            "nintendoSwitch"
        ],
        "liked": true
    }
] */