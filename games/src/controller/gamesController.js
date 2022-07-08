const games = require("../models/games.js");

const getGames = (req, res) => {
  games.find((err, games) => {
    if (err) {
      res.status(500).send({ message: "Error no servidor" });
    } else {
      res.status(200).json(games);
    }
  });
};

const getIdGame = (req, res) => {
  const id = req.params.id;

  games.findById(id, (err, games) => {
    if (err) {
      res.status(404).send({ message: `${err.message} - Id não encontrado` });
    } else {
      res.status(200).send(games);
    }
  });
};

const addGame = (req, res) => {
  let game = new games(req.body);

  game.save((err) => {
    if (err) {
      res.status(500).send({ message: `${err.message} - Erro ao salvar o jogo` });
    } else {
      res.status(201).send(game.toJSON());
    }
  });
};

const changeGame = (req, res) => {
  const id = req.params.id;

  games.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).json({ message: "Jogo atualizado" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const deleteGame = (req, res) => {
  const id = req.params.id;

  games.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).json({ message: "Jogo deletado" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const updateGame = (req, res) => {
  const id = req.params.id;
  let { liked } = req.body;

  games.findByIdAndUpdate(id, { $set: { liked } }, (err) => {
    if (!err) {
      res.status(200).json({ message: "Curtiu o jogo" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

module.exports = {
  getGames,
  getIdGame,
  addGame,
  changeGame,
  deleteGame,
  updateGame
};
