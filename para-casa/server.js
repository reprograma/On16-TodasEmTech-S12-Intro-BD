const app = require("./src/app")

const PORT = 8081

app.listen(PORT, () => { 
    console.log(`Servidor conectado na porta ${PORT}`)
})