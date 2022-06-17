const app = require('./src/app')

const PORT = 3131

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
});
