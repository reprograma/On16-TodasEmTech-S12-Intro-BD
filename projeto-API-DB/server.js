const app  = require ("./src/app.js");

const port = 4000

app.listen(port, () => {
    console.log(`Servidor do BD está rodando na porta ${port}`)
});