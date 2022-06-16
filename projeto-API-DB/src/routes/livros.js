const express = require("express");
const controller = require("../controllers/livroController.js");

const router = express.Router();

router.get("/", controller.getAllLivros);
router.get("/:id", controller.getLivros);
router.post("/", controller.createLivros);
router.put("/:id", controller.updateLivros);
router.delete("/:id", controller.deleteLivros);

module.exports = router;