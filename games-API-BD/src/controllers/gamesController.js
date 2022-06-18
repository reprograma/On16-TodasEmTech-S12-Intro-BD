const games = require("../models/games.js");

const getAllGames = (req, res) => {
  games.find((err, games) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Something went wrong!` });
    } else {
      res.status(200).json(games);
    }
  });
};

const getGamesById = (req, res) => {
  const id = req.params.id;

  games.findById(id, (err, games) => {
    if (err) {
      res.status(400).send({ message: `${err.message} - Game id not found!` });
    } else {
      res.status(200).send(games);
    }
  });
};

const createGames = (req, res) => {
  const game = new games(req.body);

  game.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Failed to register game!` });
    } else {
      res.status(201).send(game.toJSON());
    }
  });
};

const updateGames = (req, res) => {
  const id = req.params.id;

  games.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).send({ message: "Game updated successfully!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const updateLiked = (req, res) => {
  const id = req.params.id;
  const { liked } = req.body;

  games.findByIdAndUpdate(id, { $set: { liked } }, (err) => {
    if (!err) {
      res.status(200).json({ message: "Liked game updated!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const deleteGames = (req, res) => {
  const id = req.params.id;

  games.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).send({ message: "Game deleted successfully!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

module.exports = {
  getAllGames,
  getGamesById,
  createGames,
  updateGames,
  updateLiked,
  deleteGames,
};
