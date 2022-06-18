const express = require ('express');
const controller = require('../controller/gamesController.js');

const router = express.Router();

router.get('/', controller.getGames);
router.get('/:id', controller.getIdGame);
router.post('/add', controller.addGame);
router.put('/change/:id', controller.changeGame);
router.delete('/delete/:id', controller.deleteGame);
router.patch('/update/:id', controller.updateGame);


module.exports = router;