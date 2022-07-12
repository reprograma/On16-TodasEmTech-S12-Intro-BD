const games = require("../models/games.js");
const fs = require("fs");

// GET - RETORNA TODOS OS GAMES
//(err, games) esse games vem do metodo schema dentro do models
const getAllGames = (req, res) => {
  games.find((err, games) => {
    res.status(200).send(games);
  });
};
//localiza os games por id
const getGames = (req, res) => {
  const id = req.params.id;

  games.findById(id, (err, games) => {
    if (err) {
      res
        .status(400)
        .send({ message: `${err.message} -  id do game foi não encontrado` });
    } else {
      res.status(200).send(games);
    }
  });
};
//cadastrar novo game
const createGames = (req, res) => {
  let game = new games(req.body);

  game.save((err) => {
    if (err) {
      res.status(500).send({
        message: `${err.message} - Atenção!!! falha ao cadastrar o game.`,
      });
    } else {
      res.status(201).send(game.toJSON());
    }
  });
};
//buscar o game por id para fazer a alteração
const putGameUpdate = (req, res) => {
  const id = req.params.id;
//$set e usado dentro do mongoDB Atlas e o Robo3t
  games.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).send({ message: "Game foi atualizado com sucesso!!!" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};
//deleta game
const deleteGames = (req, res) => {
  const id = req.params.id;

  games.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).send({ message: "Game deletado com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

module.exports = {
  getAllGames,
  getGames,
  createGames,
  putGameUpdate,
  deleteGames,
};
