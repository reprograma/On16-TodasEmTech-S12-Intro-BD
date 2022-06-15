const games = require('../models/games.js')

const fs = require('fs')


    
const getAllGames = (req, res) => {
    games.find((err, games) => {
        res.status(200).send(games)
    })
}

    

const getById = (req, res) => {
    const id = req.params.id
    games.findById(id, (err, games) =>{
        if (err){
            res.status(400).send({message: `${err. message} -id do game não foi encontrado`})

        }else{
            res.status(200).send(games)
        }
    })
}


const createGames= (req, res) => {
    let game = new games(req.body)
    game.save((err) => {
        if (err) {
            res.status(500).send({message: `${err. message} - falha ao cadastrar game`})
        }else {
            res.status(201).send(game.toJson())
        }
    })
}


const gameUpdate = (req, res) => {
    const id = req.params.id

    games.findByIdUpdate(id,({$set: req.body}, (err) =>{
        if (!err) {
            res.status(200).send({message: 'Game atualizado com sucesso'})
        }else{
            res.status(500).send({message:err. message})
        }

    }))

}

const deleteGame = (req, res) => {
    const id = req.params.id

    games.findByIdDelete(id, (err) =>{
        if (!err) {
            res.status(200).send({message: 'Game deletado com sucesso'})
        }else{
            res.status(500).send({message:err. message})
        }

    })
}


    
 



module.exports = {
    getAllGames,
    getById,
    createGames,
    gameUpdate,
    deleteGame
}
