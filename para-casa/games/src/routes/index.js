const express = require ("express");

const router = express.Router();

router.get("/", function (request, response) {
    response.status(200).send({
        title: "Reprograma - On16 Semana 12 -Atividade",
        version: "1.0.0"
    })
});

module.exports = router;