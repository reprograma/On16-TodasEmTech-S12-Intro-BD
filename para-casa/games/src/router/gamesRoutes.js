const express = require('express')
const router = express.Router()  // funcao de rotas de express
 
const controller = require('../controller/gamesController')
 
router.get("/catalogo", controller.getAllGames)
 
router.get("/catalogo/:id", controller.getById)
 
router.post("/cadastrar", controller.createGame)
 
router.put("/atualiza/:id", controller.gameUpdate)
 
router.delete("/delete/:id", controller.deleteGame)
 

module.exports = router