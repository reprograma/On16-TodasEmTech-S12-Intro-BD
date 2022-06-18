const app  = require ("./src/app.js");

const port = 1313

app.listen(port, () => {
    console.log(`Me encontro na porta ${port}`)
});