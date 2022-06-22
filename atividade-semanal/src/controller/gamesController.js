const games = require("../model/gamesModel.js");

const getGames = (req, res) => {
  try {
    games.find((err, games) => {
      res.status(200).send(games);
    });
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
};

const getGameById = (req, res) => {
  try {
    const idRequest = req.params.id;

    games.findById(idRequest, (err, games) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - ID não encontrado` });
      } else {
        res.status(200).send(games);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
};

const addGame = (req, res) => {
  const game = new games(req.body);

  game.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - falha ao cadastrar novo jogo.` });
    } else {
      res.status(201).send(game.toJSON());
    }
  });
};

const updateGame = (req, res) => {
  const idRequest = req.params.id;

  games.findByIdAndUpdate(idRequest, req.body, (err) => {
    if (!err) {
      res.status(200).send({ message: "Jogo atualizado com sucesso!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const deleteGame = (req, res) => {
  const idRequest = req.params.id;

  games.findByIdAndDelete(idRequest, (err) => {
    if (!err) {
      res.status(200).send({ message: "Jogo deletado com sucesso!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const likeGames = (req, res) => {
  const idRequest = req.params.id;
  const { liked } = req.body

  games.findByIdAndUpdate(idRequest, {$set: {liked}}, (err) => {
    if (!err) {
      res.status(200).send({ message: "Like atualizado!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

module.exports = {
  getGames,
  getGameById,
  addGame,
  updateGame,
  deleteGame,
  likeGames,
};
