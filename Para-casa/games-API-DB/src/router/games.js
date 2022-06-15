const controller = require("../controller/gamesController");

const express = require("express");

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
//patch
router.patch("/games/:id/liked", controller.gameRankUpdated);

module.exports = router;
