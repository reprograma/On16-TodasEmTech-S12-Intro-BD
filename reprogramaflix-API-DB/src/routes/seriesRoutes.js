// Criando nossas rotas

const controller = require('../controllers/seriesController.js')

const express = require('express')

// Função de rotas do express
const router = express.Router()

// router, verbo http (caminho, função)
router.get("/series", controller.getAllSeries)
router.get("/series/:id", controller.getSerieById)
router.put("/series/atualizar/:id", controller.updateSeries)
router.post("/novaserie", controller.createSeries)
router.delete("/series/delete/:id", controller.deleteSerieById)

// Exportar para ser usado no app.js
module.exports = router