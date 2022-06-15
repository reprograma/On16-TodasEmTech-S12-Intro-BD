const mongoose = require('mongoose');
 
const gameSchema = new mongoose.Schema({
    id: {type: String}, // id n é requerido
    title:{type: String, required: true},
    launchYear:{type: Number, required: true},
    consoles:{type: Array, required: true},
    liked:{type: Boolean, required: true}
});
 
 
 
const games= mongoose.models('games',gameSchema);
 
module.exports = games;
