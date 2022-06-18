const app = require('./src/app.js');

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
});