const express = require ("express");

const router = express.Router();

router.get("/", function (request, response) {
    response.status(200).send({
        title: "Reprograma - Semana 12 - MongoDB",
        version: "1.0.0"
    })
});

module.exports = router;