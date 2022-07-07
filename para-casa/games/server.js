const app = require('./src/app.js')

const PORT = 1313

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})