const express = require('express')
const router = express.Router()  // funcao de rotas de express
 
const controller = require('../controller/gamesController')
 
router.get("/catalogo", controller.getAllGames)
 
router.get("/catalogo/:id", controller.getById)
 
router.post("/cadastrar", controller.postGames)
 
router.put("/update/:id", controller.gameUpdate)
 
router.delete("/delete/:id", controller.deleteGame)
 
router.patch("/atualizar/liked/:id",controller.atualizarLikedGame)
 
 
module.exports = router
