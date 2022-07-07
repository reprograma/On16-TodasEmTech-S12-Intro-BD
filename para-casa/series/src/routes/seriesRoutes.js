const express = require('express')


const router = express.Router()

const controller = require('../controllers/seriesControllers')

router.post("/adicionar", controller.createSerie)
router.get("/listar", controller.getAllSeries)
router.get("/listar/:id", controller.getByIdSeries)
router.patch("/alterar/:id", controller.updateSerie)
router.delete("/excluir/:id", controller.deleteSerie)



module.exports = router