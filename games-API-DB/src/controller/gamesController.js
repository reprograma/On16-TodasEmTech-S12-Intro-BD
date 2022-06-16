const express = require('express')
const games = require('../models/games')

const getAllGames = (req, res) => {

    games.find((err, games) => {
     res.status(200).json(games)
    })
 }

 const getGamesById = (req, res) => {

    const id = req.params.id

    games.findById(id, (err, games) => {
        if(err) {
            res.status(404).send({message: `${err.message} - Game ID not found`})
        } else {
            res.status(200).send(games)
        }
    })
}

const postNewGame = (req, res) => {

    let game = new games(req.body)

    game.save((err) => {
        if(err) {
            res.status(500).send({message: `${err.message} - Failed to post new game`})
        } else {
            res.status(201).send(game.toJson())
        }
    })
}

const updateGameById = (req, res) => {

    const id = req.params.id

    games.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err) {
            res.status(200).send({message: 'Game updated'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}

const deleteGameById = (req, res) => {

    const id = req.params.id

    games.findByIdAndDelete(id, (err) => {
        if(!err) {
            res.status(200).send({message: 'Game removed'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}

const updateLike = (req, res) => {

    const id = req.params.id
    const{liked} = req.body

    games.findByIdAndUpdate (id, {$set: {liked}}, (err) => {
        if(!err) {
            res.status(200).send({message: 'Updated like'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}