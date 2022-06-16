const express = require('express')
const games = require('../models/games')

const getAllGames = (req, res) => {

    games.find((err, games) => {
     res.status(200).json(games)
    })
 }