// chamando mongoose
const mongoose = require("mongoose");
// construindo nosso schema
const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, require: true },
  autora: { type: String, require: true },
  editora: { type: String, require: true },
  numeroPaginas: { type: Number, require: true },
});
