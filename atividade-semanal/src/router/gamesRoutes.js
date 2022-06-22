const express = require("express");
const controller = require("../controller/gamesController.js");

const router = express.Router();

router.get("/", controller.getGames);
router.get("/:id", controller.getGameById);
router.post("/", controller.addGame);
router.put("/:id", controller.updateGame);
router.delete("/:id", controller.deleteGame);
router.patch("/:id", controller.likeGames);

module.exports = router
