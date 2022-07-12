const app = require('./src/app')

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor Game está iniciando na porta ${PORT}`)
})