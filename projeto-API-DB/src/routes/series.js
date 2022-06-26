const express = require("express")
const router = express.Router()
const controller = require("../controller/seriesController.js")

// get - recuperar todas as séries, recuperar por gênero, retornar uma série específica
router.get("/series", controller.getAllSeries)
router.get("/series/genero", controller.getSeriesByGenre)
router.get("/series/:id", controller.getSeriesById)

// post - adicionar

router.get("/series", controller.createSeries)

// delete - remoção
router.delete("/series/:id", controller.deleteSerie)

// patch - alteração
router.patch("series/:id/liked", controller.updateLiked)



module.exports = router;