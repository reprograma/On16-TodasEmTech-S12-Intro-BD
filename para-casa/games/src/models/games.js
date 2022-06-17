const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  launchYear: { type: Number, required: true },
  consoles: [{ type: String, required: true }],
  Liked: [{ type: String, required: true }],
});


const games = mongoose.model('game', gameSchema);

module.exports = games;