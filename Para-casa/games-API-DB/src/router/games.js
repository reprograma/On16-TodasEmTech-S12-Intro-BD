const express = require("express");
const controller = require("../controller/gamesController");

const router = express.Router();

//get
router.get("/games", controller.getAllGames);
router.get("/games/:id", controller.getById);
//post
router.post("/games", controller.addNewGame);
//put
router.put("/games/:id", controller.updateGame);
//delete
router.delete("/games/:id", controller.deleteGame);

module.exports = router;
