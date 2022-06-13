const express = require('express')
const router = express.Router()  

 
const controller = require('../controller/gamesController')

 
router.get("/catalogo", controller.getAllGame)
 
router.get("/catalogo/:id", controller.getById)
 
router.post("/cadastrar", controller.cadastrarGame)
 
router.put("/update/:id", controller.updateGame)
 
router.delete("/delete/:id", controller.deletarGame)
 
router.patch("/atualizar/liked/:id",controller.atualizarLikedGame)
 

 
module.exports = router