const catalog = require("../models/games.json")
const fs = require("fs")

const allGames = (req, res) => {
    try{
        res.status(200).json({ Games: catalog})
    }catch{
        res.status(500).send({ Message: "Internal server error"})
    }
}

const idGames = (req, res) => {
    const idRequest = req.params.id
    const idFilter = catalog.filter((game) => game.id == idRequest)

    if(idFilter.length > 0){
        res.status(200).send(idFilter)
    }else{
        res.status(404).send({ Message: "Id not found"})
    }
}

const addGames = (req, res) => {
    const {title, launchYear, consoles, liked} = req.body
    catalog.push({id: catalog.length +1, title, launchYear, consoles, liked})

    fs.writeFile("./src/models/games.json", JSON.stringify(catalog), "utf8", function (err) {
        if(err){
            res.status(500).send({ Message: err})
        }else{
            console.log("Updated file successfully")
            const gameFound = catalog.find((games) => games.id == catalog.length)
            res.status(200).send(gameFound)
        }
    })
}

const updateGames = (req, res) => {
    const idRequest = req.params.id
    const {title, launchYear, consoles, liked} = req.body
    const gamesFound = catalog.find((games => games.id == idRequest))
    const gamesIndex = catalog.indexOf(gamesFound)

    if(gamesIndex != -1){
        catalog[gamesIndex] = {
            id: parseInt(idRequest),
            title,
            launchYear,
            consoles,
            liked
        }
        res.status(200).send(catalog[gamesIndex])

        fs.writeFile("./src/models/games.json", JSON.stringify(catalog), "utf8", function (err) {
            if(err){
                res.status(500).send({ Message: err})
            }else{
                console.log("Updated file successfully")
                const gameFound = catalog.find((games) => games.id == catalog.length)
                res.status(200).send(gameFound)
            }
        })
    }else{
        res.status(404).send({ Message: "Id not found"})
    }
}

const likedGames = (req, res) => {
    const idRequest = req.params.id
    const likedRequest = req.body.liked
    const gameFind = catalog.find((game) => game.id == idRequest) //encontrando a série
    const gameIndex = catalog.indexOf(gameFind) //Identificando o indice da série no meu array

    if (gameIndex >= 0) {
        gameFind.liked = likedRequest
        catalog.splice(gameIndex, 1, gameFind)

        fs.writeFile("./src/models/games.json", JSON.stringify(catalog), "utf8", function (err) {
            if(err){
                res.status(500).send({ Message: err})
            }else{
                console.log("Updated file successfully")
                const gameFound = catalog.find((games) => games.id == catalog.length)
                res.status(200).send(gameFound)
            }
        })
    }else{
        res.status(404).send({ Message: "Id not found"})
    }
}

const deleteGames = (req, res) => {
    const idRequest = req.params.id
    const indexGame = catalog.findIndex((game) => game.id == idRequest)

    if (indexGame != -1) {
        catalog.splice(indexGame, 1)
    
        fs.writeFile("./src/models/games.json", JSON.stringify(catalog), "utf8", function (err) {
            if(err){
                res.status(500).send({ Message: err})
            }else{
                res.status(200).send({ Message: "Game deleted"})
            }
        })
    }else{
        res.status(404).send({ Message: "Id not found"})
    }
}

module.exports = {
    allGames,
    idGames,
    addGames,
    updateGames,
    likedGames,
    deleteGames
}