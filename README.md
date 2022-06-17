<h1 align="center">
    <br>
    <p align="center">Repositório S12 - API Games utilizando CRUD e MongoDB 🚀 <p>
</h1>
<p align="center">
<img src= "image\code.gif" width="30%" height="30%"/>
</p>
<p align="center">
 
</p>

### Repositório de Banco de Dados + API - Semana 12:

O repositório da Semana 12 é uma API REST com Banco de dados criada para o curso da {Reprograma}

A interface é um CRUD, onde é possível listar os games no banco de dados; listar games através do ID; cadastrar novos games; atualizar um game específico; alterar games favoritados; deletar games específicos.

Ps: A 📁projeto-API-DB foi criada em conjunto com a professora Tereza Oiveira durante a aula da semana-12, portanto todas as informações sobre o mesmo se encontra dentro da pasta específica.

**E Como funciona?** 💬

1. Clone o projeto através do comando:
`$git clone https://github.com/louicosta/On16-TodasEmTech-S11-API-Revisao`

2. Inicialize o package.json com todas as configurações do projeto através dos comandos: </p>
`$npm init` </p>
`$npm i express`
`$npm i mongoose`

4. Inicialize com o comando `npm run start` para que você possa executar os testes localmente.


### Recursos e tecnologias utilizadas para a construção da API:

* **Node.Js** - versão 14.17.0;
* Dependências Node.Js:
   * **Express** - versão 4.18.1;
   * **Nodemon** - versão 2.0.16;
* Biblioteca Mongoose:
   * **Mongoose** - versão 6.3.8;
* **Git**;
* **Visual Studio Code**;
* **Postman**;


### Testando as rotas na sua máquina:

Este projeto já está com os métodos HTTP organizados. Você pode testar as rotas Get, Post, Update e Delete através da ferramenta Postman.

1. Abra o aplicativo [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=pt-BR);

2. Teste as rotas usando esta rota raiz na URL do Postman: localhost:3000/games/

3. As rotas/endpoints estão disponiveis na pasta 📁- routes 

4. Para utilizar as rotas de *POST, PUT e PATCH* deve-se usar no Postman os verbos de acordo e, clicar em *body* e posteriormente em *raw*, trocar de *text* para *JSON* e apertar *Send*.

### Cadastrando MongoDB Atlas

Neste projeto iremos utilizar a GUI MongoDB Atlas para gerenciar nosso banco de dados, será necessário fazer o cadastro no site oficial [MongoDB Atlas](https://www.mongodb.com/atlas/database), cadastrar um usuário e optar pela modalidade shared(pública) com o provedor de sua escolha. 

Após seguir o passo a passo de configuração de cluster e projeto, será necessário cadastrar um usuário e senha para criar seu database. Não esqueça de anotar e guardar a senha em local seguro.  

Após a criação do database, você já pode clicar em `connect`, como vamos usar nossa própria aplicação, clique em “Connect your aplication”. Será gerada um endereço de localhost, copie e esse endereço pois em breve iremos utilizá-lo. 


### Estrututura de Arquivos da API:

```
├─📁games
│  ├─📁src
│    ├──📁config
|    |  ├── dbConnect.js
│    ├──📁controller
|    |  ├── gamesController.js
│    ├──📁models
|    |  ├── games.js
│    ├──📁routes 
│    |  ├── gamesRoutes.js
│    |  ├── index.js
|    ├── app.js
├─── .gitignore
├─── package-lock.json
├─── package.json
├─── server.js
```


</br>

### Manipulação das Rotas de Games:

| Método HTTP | Endpoint                     | Descrição                                     |
| ----------- | ---------------------------- | --------------------------------------------- |
| ROTA RAIZ   | `/games`                     | Utilizada antes de todo endpoint              |
| GET         | `/`                          | Retorna todos os games                        |
| GET         | `/:id`                       | Retorna um game por id                        |
| POST        | `/add`                       | Cadastra um novo game                         |
| PUT         | `/change/:id`                | Altera um game por id                         |
| PATCH       | `/update/:id`                | Altera a tag liked de um game                 |
| DELETE      | `/delete/:id`                | Remove um game específico                     |

</br>


</br>
</br>

<span align="center">

#  Muito obrigada a você que chegou até aqui! 💜 </h2> 

</span>

<p align="center">
<img src="image\levelUp.gif" width="70%" height="70%"/>
</p>
<p align="center">
  <a> 