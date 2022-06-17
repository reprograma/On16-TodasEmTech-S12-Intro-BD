const app  = require ("./src/app.js");

const port = 8080

app.listen(port, () => {
    console.log(`Servidor do BD está rodando na porta ${port}`)
});