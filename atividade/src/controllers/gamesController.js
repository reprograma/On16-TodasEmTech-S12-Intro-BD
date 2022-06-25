const games = require("../models/games.js")
const fs = require("fs")

const getAllGames = (req, res) => {
  games.find((err, games) => {
    res.status(200).send(games)
  })
}

const getGames = (req, res) => {
  const id = req.params.id
  games.findById(id, (err, games) => {
    if (err) {
      res.status(400), send({ message: `${err.message} - id do jogo não foi encontrado` })
    } else {
      res.status(200).send(games)
    }
  })
}

const createGames = (req, res) => {
  let game = new games(req.body)

  games.save((err) => {
    if (err) {
      res.status(500).send({ message: `${err.message} - falha ao adicionar jogo` })
    } else {
      res.status(201).send(game.toJSON())
    }
  })
}

const updateGames = (req, res) => {
  const id = req.params.id

  games.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).send({ message: "jogo atualizado" })
    } else {
      res.status(500).send({ message: err.message })
    }
  })
}

const deleteGames = (req, res) => {
  const id = req.params.id

  games.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).send({ message: "jogo deletado" })
    } else {
      res.status(500).send({ message: err.message })
    }
  })
}

function buscaJogo(id) {
  return games.findIndex((game) => game.id == id)
}

module.exports = {
  getAllGames,
  getGames,
  createGames,
  updateGames,
  deleteGames
}