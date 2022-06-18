<h1 align="center">
    <br>
    <p align="center">API Games utilizando CRUD e MongoDB 🕹️ <p>
</h1>


<!--ts-->
- [🪄 Preparando o ambiente!](#-preparando-o-ambiente)
- [🕹️ Games](#️-games)
- [🕹️ Postman Games](#️-postman-games)
- [🕹️ MongoDB Atlas Games](#️-mongodb-atlas-games)
- [🎄 Autora](#-autora)

<!--te-->

</br>

## 🪄 Preparando o ambiente!

</br>

Para executar este projeto, você deverá ter instalado o Node.js e as dependências do npm. Além disso, iremos fazer requisições na API com a plataforma Postman.

Seguiremos a ordem de instalações no terminal:

- Clone o projeto através do comando:
`$git clone https://github.com/louicosta/On16-TodasEmTech-S11-API-Revisao`
- ` npm init`
- ` npm install express `
- ` npm install nodemon `
- ` npm install mongoose `
- Inicialize com o comando `npm start` para que você possa executar os testes localmente.

</br>


## 🕹️ Games

</br>

Este projeto já está com os métodos HTTP organizados. Você pode testar as rotas Get, Post, Update e Delete através da ferramenta Postman. A interface é um CRUD, onde é possível listar as séries/games na base de dados; listar games através do ID; listar séries através de um gênero específico ; listar as séries através de um ID; cadastrar novas séries/games; atualizar um game específico; alterar séries/games favoritadas; deletar séries/games específicos.


<br>✅ poder listar todos os jogos
<br>✅ poder listar apenas um jogo específico
<br>✅ poder cadastra um novo jogo
<br>✅ poder atualizar um jogo específico
<br>✅ poder deletar um jogo específico
<br>✅ poder atualizar se gostou ou não do jogo

Sendo assim precisaremos criar 7 rotas para músicas:

| Verbo  | Descrição da Rota                      |
| ------ | ---------------------------------------|
| GET    | Listar jogos                           |
| GET    | Listar jogo específico                 |
| POST   | Cadastrar um novo jogo                 |
| PUT    | Atualizar um jogo específico           |
| DELETE | Deletar um jogo específico             |
| PATCH  | Atualizar se gostou ou não do jogo     |

</br>


## 🕹️ Postman Games

</br>

**`GET`** Listar todos os jogos | `localhost:3000/games/lista`;

**`GET`** Listar apenas um jogo específico | `localhost:3000/games/buscargame/1`;

**`POST`** Cadastrar um novo jogo | `localhost:3000/games/cadastrar`;

**`PUT`** Atualizar um jogo específico| `localhost:3000/games/atualizar/1`;

**`DELETE`** Deletar um jogo específico | `localhost:3000/games/deletar/1`;

**`PATCH`** Atualizar se gostou ou não do jogo | `localhost:3000/games/curti/2`;


</br>

## 🕹️ MongoDB Atlas Games

</br>

A interface é um CRUD, onde é possível listar os games no banco de dados; listar games através do ID; cadastrar novos games; atualizar um game específico; alterar games favoritados; deletar games específicos.

</br>

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

## 🎄 Autora

</br>

<p align="center">
<a>
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQFUFLABHg5xfA/profile-displayphoto-shrink_800_800/0/1646500768370?e=1659571200&v=beta&t=ZeyR8RdmYcjcC_Mfr83iTLwkrQT3MR74QzceWIdbWfI" width="100px;" alt="Foto de Perfil de Andreza"/>
 <br/>
</a>

<p align="center">
Desenvolvido por</p>

[![Linkedin Badge](https://img.shields.io/badge/-Andreza_Pipolo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andrezapipolo/)](https://www.linkedin.com/in/andrezapipolo/)  com o apoio das amigas 💙  <img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" />
</p></p> <p align="center"></p>

