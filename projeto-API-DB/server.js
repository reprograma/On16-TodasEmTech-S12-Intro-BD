const app  = require ("./src/app.js");

const port = 4000

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`)
});