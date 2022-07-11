const express = require ("express");
const index = require ("./routes/index.js"); 
const livros = require ("./routes/livros.js");
const db = require ("./config/dbConnect.js");// adicionou a rota do dbConnect.js

//db esta vindo do arquivo dbConnect.js
// aqui criou uma sintaxe - obs: foi utilizada dois parâmetros uma palavra reservada error  e o bind é usada na conexão como banco de dados.
db.on("error", console.log.bind(console, 'Erro de conexão')) /* db.on  é um método, error e uma palavra reservada é um parâmetro, bind recebe outro parametro */

 // db.once é um método informa a conexão com BD com Sucesso
db.once("open", () => {
    console.log('Conexão com o banco iniciada com SUCESSO')
})

const app = express();

app.use(express.json());
// Content-Type é um padrão que fará uma conexao 
app.use(function (req, res, next) {
    // header é o cabeçalho das informações 
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index);
app.use("/livros", livros);

module.exports = app;


// o header geralmente fica no arquivo app


/*Content-Type
O cabeçalho Content-Type é utilizado para indicar o tipo de arquivo (en-US) do recurso.
 
Em respostas, o Content-Type diz para o client qual é o tipo de conteúdo que a resposta, de fato, tem. Alguns browsers vão realizar o chamado "MIME Sniffing" em alguns casos e não vão, necessariamente, seguir o valor declarado por este cabeçalho. Para previnir este comportamento é possível definir o cabeçalho X-Content-Type-Options para o valor nosniff.
 
Em requisições, como POST ou PUT, o client diz ao servidor qual o tipo de dado que está, de fato, sendo enviado.*/

/* tipo de arquivo (en-US) - Tipo MIME
Um tipo MIME (agora chamado corretamente de "tipo de mídia", mas também às vezes "tipo de conteúdo") é uma string enviada junto com um arquivo que indica o tipo do arquivo (descrevendo o formato do conteúdo, por exemplo, um arquivo de som pode ser rotulado como audio/ogg, ou um arquivo de imagem image/png). */