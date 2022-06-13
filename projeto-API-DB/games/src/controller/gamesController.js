const games = require('../models/games.json')

const fs = require('fs')

const getAllGame = (req, res) => {
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

const cadastrarGame = (req, res) => {
    const { id, title, launchYear, consoles, liked } = req.body

    games.push({ id: (games.length + 1), title, launchYear, consoles, liked })

    fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) {
        if (err) {
            res.status(500).send({ message: err })

        } else {
            console.log("Game atualizado com sucesso")
            const gameFound = games.find(game => game.id == id)
            res.status(200).send(gameFound)
        }
    })

    res.status(200).send({ message: "Game cadastrado!!!" })


}

const updateGame = (req, res) => {
    const idGame = req.params.id
    const gameUpdated = req.body

    const positionGames = games.findIndex(game => {
        return game.id == idGame
    })
    if (gameUpdated) {
        games.splice(positionGames, 1, gameUpdated)

        res.status(200).json([{
            gameUpdated,
            "mensagem": "Game atualizado"
        }])
    } else {
        res.status(404).send({ message: "Game não pode ser atualizado." })
    }

}

const deletarGame = (req, res) => {
    try {
        const idGame = req.params.id
        const gameFound = games.find(game => game.id == idGame) 
        const gameIndex = games.indexOf(gameFound) 
 
        if (gameIndex >= 0) { 
            games.splice(gameIndex, 1) 
            res.status(200).json([{
                "message": "Game deletado com sucesso",
                "deletado": idGame,
                games
            }])
            
        } else {
            res.status(404).send({ message: "Game não encontrado logo não pode ser deletado" })
        }
 
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar" })
    }
}

const atualizarLikedGame = (req, res) => {
    let = idGameRequest = req.params.id
    let = likedRequest = req.body.liked
    const likedFound = games.find(game => game.id == idGameRequest)

    const likedIndex = games.indexOf(likedFound)
    if (likedIndex >= 0) {
        likedFound.liked = likedRequest

        games.splice(likedIndex, 1, likedFound)
        fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) {
            if (err) {

                res.status(500).send({ message: err })
            } else {

                console.log("Game alterado")

                const likedUpdated = games.find(game => game.id ==
                    idGameRequest)

                res.status(200).send(likedUpdated)
            }
        })
    } else {
        res.status(404).send({ message: "Jogo não encontrado, cadastre-o" })
    }
}


module.exports = {
    getAllGame,
    getById,
    cadastrarGame,
    updateGame,
    deletarGame,
    atualizarLikedGame
}