const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  launchYear: { type: String, required: true },
  consoles: [{ type: String, required: true }],
  liked: { type: Boolean, required: true },
});

const gameModel = mongoose.model("Model", gameSchema);

module.exports = gameModel;
