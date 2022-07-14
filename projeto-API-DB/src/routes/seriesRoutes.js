const { Router } = require('express')
const express = require('express')


const router = express.Router()

const controller = require('../controllers/seriesController')

router.post("/novaserie", controller.createSerie)
router.get("/catalogo", controller.getAllSeries)
router.get("/serie/:id", controller.getByIdSeries)
router.patch("/update/:id", controller.updateSerie)
router.delete("/delete/:id", controller.deleteSerie)



module.exports = Router