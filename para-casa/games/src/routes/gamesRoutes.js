const express = require('express')
const controller = require('../controller/controllerGames')
const router = express.Router()



router.get('/', controller.getAll)
router.get('/:id', controller.getbyId)
router.post('/', controller.createGames)
router.put('/:id', controller.update)
router.patch('/:id/liked', controller.updateLike)
router.delete('/:id', controller.deleteGame)


module.exports = router