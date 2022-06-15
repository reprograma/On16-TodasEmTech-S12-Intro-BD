const games = require ("../models/games");
const fs = require ("fs");

const getAllGames = (req, res) => {
  games.find((err, games) => {
    res.status(200).json(games);
  })  
};

const getById = (req, res) => {
  const id = req.params.id;

  games.findById(id, (err, games) => {
    if(err) {
      res.status(400).send({message: `${err.message} - id do game não encontrado`})
    } else {
      res.status(200).send(games);
    }
  })
};

const addNewGame =  (req, res) => {
  let game = new games(req.body);

  game.save((err) => {
    if(err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar game`})
    } else {
      res.status(201).send(game.toJSON())
    }
  })
};

const updateGame =  (req, res) => {
  const id = req.params.id;

  games.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message:'game atualizado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

const deleteGame =  (req, res) => {
  const id = req.params.id;

  games.findByIdAndDelete(id, (err) => {
    if(!err) {
      res.status(200).send({message:'game deletado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

module.exports = {
    getAllGames,
    getById, 
    addNewGame,
    updateGame,
    deleteGame
};