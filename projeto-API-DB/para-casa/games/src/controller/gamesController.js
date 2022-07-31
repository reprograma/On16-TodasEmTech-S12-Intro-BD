const games = require("../models/games")

const gamesLista = (request, response) => {
    games.find((err, games) => {
        response.status(200).json(games)
    })
}

const buscaJogo = (request, response) => {
    const idRequest = request.params.id

    games.findById(idRequest, (err, games) => {
        if(err){
            response.status(400).send({message: `${err.message} - id do jogo não encontrado`})
        } else {
            response.status(200).send(games)
        }
    })
}

const cadastraJogo = (request, response) => {

    let game =  new games(request.body)

    game.save((err) => {
        if(err) {
            response.status(500).send({message: `${err.message} - falha ao cadastrar jogo`})
        } else {
            response.status(201).send(games.toJSON())
        }
    })
}

const atualizaJogo = (request, response) => {
    const idRequest = request.params.id

    games.findByIdAndUpdate(idRequest, {$set: request.body},(err) => {
        if(!err){
            response.status(200).send({message:"Jogo atualizado com sucesso"})
        } else {
            response.status(500).send({message:err.message})
        }
    })
}

const deletaJogo = (request, response) => {
    const idRequest = request.params.id

    games.findByIdAndDelete(idRequest, (err) => {
        if(!err) {
            response.status(200).send({message:"Jogo deletado com sucesso"})
        } else {
            response.status(500).send({message:err.message})
        }
    })
}

const likedGame = (request, response) => {
    const idRequest = request.params.id

    games.findByIdAndUpdate(idRequest, {$set: request.body.liked}, (err) => {
        if(!err) {
            response.status(200).send({message:"Liked do jogo atualizado com sucesso"})
        } else {
            response.status(500).send({message:err.message})
        }
    })
}

module.exports ={
    gamesLista,
    buscaJogo,
    cadastraJogo,
    atualizaJogo,
    deletaJogo,
    likedGame
}