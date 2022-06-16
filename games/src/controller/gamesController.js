const express = require('express')
const games = require('../models/games.js')

const getAllGames = (req, res) => {

   games.find((err, games) => {
    res.status(200).json(livros)
   })
}

const getGamesById = (req, res) => {

    const id = req.params.id

    games.findById(id, (err, livros) => {
        if(err) {
            res.status(404).send({message: `${err.message} - Game ID not found`})
        } else {
            res.status(200).send(games)
        }
    })

}

const postNewGame = (req, res) => {

    try {
        const postGame = { id, title, launchYear, consoles, liked } = req.body
        games.push({ id: games.length + 1, title, launchYear, consoles, liked})

        res.status(201).send({ message: 'New game added', postGame})

    } catch(err) {
        res.status(500).send({ message: 'Internal error'})
    }

}

const updateGameById = (req, res) => {

    try {

        const idRequest = req.params.id

        const gameRequest = req.body

        let foundIndex = games.findIndex(game => game.id == idRequest)

        games.splice(foundIndex, 1, gameRequest)

        res.status(200).send({ message: 'Game updated succesfully', gameRequest})

    } catch(err) {
        res.status(500).send( {message: 'Internal error'})
    }
}

const deleteGameById = (req, res) => {

    try {

        const idRequest = req.params.id

        const indexGame = games.findIndex(game => game.id == idRequest)

        games.splice(indexGame, 1)

        res.status(200).send({ message: 'Game deleted succesfully', deleted: idRequest, games })

    } catch(err) {
        res.status(500).send({ message: 'Internal error'})
    }

}

const updateLike = (req, res) => {

    const idRequest = req.params.id
    const likedRequest = req.body.liked

    const gameFound = games.find(game => game.id == idRequest)
    const gameIndex = games.indexOf(gameFound)

    if (gameIndex >= 0) {

        gameFound.liked = likedRequest
        games.splice(gameIndex, 1, gameFound)

        res.status(200).send({ message: 'Updated like', games })
        
    } else {

        res.status(500).send({ message: 'Internal error' })
    }
}

    

module.exports = {
    getAllGames,
    getGamesById,
    postNewGame,
    updateGameById,
    deleteGameById,
    updateLike
}
