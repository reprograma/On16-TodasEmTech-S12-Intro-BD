const games = require('../models/games.json')

const fs = require('fs')

const getAllGames = (req, res) => {
    try {
        res.status(200).json([{
            "games:": games
        }])
    } catch (err) {
        res.status(500).send({ message: "Erro no server" })
    }
}

const getById = (req, res) => {
    const idRequest = req.params.id
    const idFilter = games.filter(game => game.id == idRequest)
    if (idFilter.length > 0) {
        return res.status(200).send(idFilter)
    } else {
        res.status(404).send([{
            "message": "Game not found", games
        }])
    }
    res.status(200).send(idFilter)
}

const postGames = (req, res) => {
    const { id, title, launchYear, consoles, liked } = req.body
    //push inclui algo no final do array
    games.push({ id: (games.length + 1), title, launchYear, consoles, liked })

    fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) {
        if (err) {
            res.status(500).send({ message: err })

        } else {
            console.log("Game criado com sucesso")
            const gameFound = games.find(game => game.id == id)
            res.status(201).send(gameFound)
        }
    })

    res.status(200).send({ message: "É isso aew!!!" })


}

//put 
const gameUpdate = (req, res) => {
    const idGame = req.params.id
    const gameUpdated = req.body

    const positionGames = games.findIndex(game => {
        return game.id == idGame
    })
    if (gameUpdated) {
        games.splice(positionGames, 1, gameUpdated)

        res.status(200).json([{
            gameUpdated,
            "mensagem": "Game atualizado com sucesso"
        }])
    } else {
        res.status(404).send({ message: "Game não encontrado para atualizar." })
    }


}

//delete
    
const deleteGame = (req, res) => {
    try {
        const idGame = req.params.id
        const gameFound = games.find(game => game.id == idGame) // encontro o game pelo id
        const gameIndex = games.indexOf(gameFound) 
 
        if (gameIndex >= 0) { 
            games.splice(gameIndex, 1) 
            res.status(200).json([{
                "message": "Game deletado com sucesso amada",
                "deletado": idGame,
                games
            }])
            
        } else {
            res.status(404).send({ message: "Game não encontrado logo não pode ser deletado" })
        }
 
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar o game" })
    }
}

   
 
//patch
const atualizarLikedGame = (req, res) => {
    let = idGameRequest = req.params.id
    let = likedRequest = req.body.liked
    const likedFound = games.find(game => game.id == idGameRequest)

    const likedIndex = games.indexOf(likedFound)
    if (likedIndex >= 0) {
        likedFound.liked = likedRequest
        //encontrou, remove, adiciona
        games.splice(likedIndex, 1, likedFound)
        fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) {
            if (err) {

                res.status(500).send({ message: err })
            } else {

                console.log("Seu game foi alterado")

                const likedUpdated = games.find(game => game.id ==
                    idGameRequest)

                res.status(200).send(likedUpdated)
            }
        })
    } else {
        res.status(404).send({ message: "Não encontramos esse jogo,cadastre-o please" })
    }
}










module.exports = {
    getAllGames,
    getById,
    postGames,
    gameUpdate,
    deleteGame,
    atualizarLikedGame
}
