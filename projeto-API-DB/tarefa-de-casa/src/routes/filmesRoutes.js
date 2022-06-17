const express = require("express");
const controller = require("../controllers/livroController.js");

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getFilmes);
router.post("/", controller.createFilmes);
router.put("/:id", controller.updateFilmes);
router.delete("/:id", controller.deleteFilmes);

module.exports = router;