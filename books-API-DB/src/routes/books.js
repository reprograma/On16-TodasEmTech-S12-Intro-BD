const express = require("express");
const controller = require("../controllers/booksController.js");

const router = express.Router();

router.get("/", controller.getAllBooks);
router.get("/:id", controller.getBooksById);
router.post("/", controller.createBooks);
router.put("/:id", controller.updateBooks);
router.patch("/:id", controller.updatePagesFromBook);
router.delete("/:id", controller.deleteBooks);

module.exports = router;
