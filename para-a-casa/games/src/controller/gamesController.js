const gamesJS = require('../models/games.js')
const fs = require('fs')

//Retorna todos os jogos. Verbo GET do HTTP
const getAllGames = (request, response) => {
    try {
        gamesJS.find((err, livros) => {
            response.status(200).json(gamesJS);
        })
    } catch (error) {
        response.status(500).send({ 'Message': 'Erro no Servidor' })
    }
}

//Retorna jogo específico a partir do ID. Verbo GET do HTTP
const getIdGames = (request, response) => {
    const id = request.params.id

    gamesJS.findById(id, (err, livros) => {
        if (err) {
            response.status(400).send({ message: `${err.message} - id do game não encontrado` })
        } else {
            response.status(200).send(gamesJS);
        }
    })
}


//Cadastra novo jogo. Verbo POST do HTTP
const addGames = (request, response) => {
    let games = new gamesJS(request.body);

    games.save((err) => {
        if (err) {
            response.status(500).send({ message: `${err.message} - falha ao cadastrar game` })
        } else {
            response.status(201).send(games.toJSON())
        }
    })
}


//Atualiza um jogo específico a partir do ID. Verbo PUT do HTTP
const attGames = (request, response) => {
    const id = request.params.id;

    gamesJS.findByIdAndUpdate(id, { $set: request.body }, (err) => {
        if (!err) {
            response.status(200).send({ message: 'Game atualizado com sucesso' })
        } else {
            response.status(500).send({ message: err.message })
        }
    })
}


//Deleta um jogo específico a partir do ID. Verbo DELETE do HTTP
const deleteGame = (request, response) => {
    const id = request.params.id;

    gamesJS.findByIdAndDelete(id, (err) => {
        if (!err) {
            response.status(200).send({ message: 'Livro deletado com sucesso' })
        } else {
            response.status(500).send({ message: err.message })
        }
    })
}


//Atualiza que o usuário gostou ou não do jogo. Verbo PATCH do HTTP
const likedGames = (request, response) => {
    const idRequest = request.params.id
    const { liked } = request.body

    gamesJS.findByIdAndUpdate(idRequest, { $set: { liked } }, (err) => {
        if (!err) {
            response.status(200).send({ message: 'Like atualizado com Sucesso!' })
        } else {
            response.status(404).send({ message: 'Game não encontrado' })
        }
    })

}


//Exporta as funções aqui definidas
module.exports = {
    getAllGames,
    addGames,
    getIdGames,
    attGames,
    deleteGame,
    likedGames
}