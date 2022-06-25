const app = require("./src/app.js");
const port = 3030

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});