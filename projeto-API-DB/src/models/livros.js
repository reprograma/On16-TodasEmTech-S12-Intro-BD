const mongoose = require('mongoose');

constlivrosSchema = new mongoose.Schema(

  {
    id: {
      tyoe: String
    },
    titulo: {
      type: String,
      required: true
    },
    autor: {
      type: String,
      required: true
    },
    editora: {
      type: String,
      required: true
    },
    numeroPaginas: {
      type: Number,
      required: true
    },

  }

)