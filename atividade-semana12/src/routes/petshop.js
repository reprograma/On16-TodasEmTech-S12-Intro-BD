const express = require('express');
const controller = require('../controllers/petshopControllers');

const router = express.Router();

router.get("/", controller.getAllPets)
router.get("/:id", controller.getPetById)
router.post("/addNewPet", controller.createPet)
router.put("/update/:id", controller.updatePet)
router.delete("/delete/:id", controller.deletePet)

module.exports = router;

