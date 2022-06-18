const books = require("../models/books.js");

const getAllBooks = (req, res) => {
  books.find((err, books) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Something went wrong!` });
    } else {
      res.status(200).json(books);
    }
  });
};

const getBooksById = (req, res) => {
  const id = req.params.id;

  books.findById(id, (err, books) => {
    if (err) {
      res.status(404).send({ message: `${err.message} - Book id not found!` });
    } else {
      res.status(200).send(books);
    }
  });
};

const createBooks = (req, res) => {
  let book = new books(req.body);

  book.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Failed to register the book!` });
    } else {
      res.status(201).send(book.toJSON());
    }
  });
};

const updateBooks = (req, res) => {
  const id = req.params.id;

  books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).send({ message: "Book successfully updated!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const updatePagesFromBook = (req, res) => {
  const id = req.params.id;
  const { pagesFromBook } = req.body;

  books.findByIdAndUpdate(id, { $set: { pagesFromBook } }, (err) => {
    if (!err) {
      res.status(200).json({ message: "Updated book page numbers!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const deleteBooks = (req, res) => {
  const id = req.params.id;

  books.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).send({ message: "Successfully deleted book!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

module.exports = {
  getAllBooks,
  getBooksById,
  createBooks,
  updateBooks,
  updatePagesFromBook,
  deleteBooks,
};
