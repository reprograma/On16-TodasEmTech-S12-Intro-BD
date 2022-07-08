const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')

// ROTAS
router.get('/', controller.listaSeries)
router.get('/genero/', controller.getByGenero)
router.get('/porId/:id', controller.getById)
router.post('/adicionar/', controller.postSerie)
router.patch('/series/liked/:id', controller.likedSerie)
router.delete('/delete/:id', controller.deleteSerie)


// para exportar
module.exports = router