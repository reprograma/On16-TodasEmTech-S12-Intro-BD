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