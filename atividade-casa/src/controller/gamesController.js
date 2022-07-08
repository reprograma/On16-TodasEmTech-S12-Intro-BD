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

const addGame = async (req, res) => {
  try {
    const newGame = new games(req.body);

    const savedGame = await newGame.save();

    return res.status(201).send({
      message: "Jogo criado com sucesso!",
      savedGame
    });
  } catch (err) {
    console.error(err);
  }
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

  games.findByIdAndDelete(idRequest, (err, gameDeleted) => {
    if (!err) {
      res.status(200).send({ message: "Jogo deletado com sucesso!", gameDeleted });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const likeGames = (req, res) => {
  const idRequest = req.params.id;
  const { liked } = req.body;

  games.findByIdAndUpdate(idRequest, { $set: { liked } }, (err) => {
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
