const app = require('./src/app')

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Servidor Game está iniciando na porta ${PORT}`)
})