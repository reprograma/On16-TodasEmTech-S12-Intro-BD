const express = require('express') //necessário importar aqui para poder usar o Router
const router = express.Router()
const controller = require('../controller/gamesController')

//Rotas
router.get ("/catalogo", controller.getAllGames)
router.get("/catalogo/:id", controller.getIdGames)
router.post("/cadastrar", controller.addGames)
router.put("/catalogo/attGames/:id", controller.attGames)
router.delete("/delete/:id", controller.deleteGame) 
router.patch("/status/:id", controller.likedGames) 


module.exports = router