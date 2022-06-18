const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishingCompany: { type: String, required: true },
  pagesFromBook: { type: Number, required: true },
});


const books = mongoose.model('books', booksSchema);

module.exports = books;