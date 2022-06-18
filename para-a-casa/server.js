const app  = require ("./games/src/app");

const port = 4000

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`)
});