<h1 align="center">  Introdução a BD :rocket: </h1>
<h3 align="center">  Turma On16 Todas em Tech - Back-end | S12  </h3>
<br>

## :rainbow: *Atividade da 12 semana da Reprograma.* :hearts:
<br>

APIs REST com integração ao banco de dados MongoDB, utilizando as plataformas Studio 3T e Postman para requisições. 

<br>

> ## Books 	:books:

API com uma biblioteca de livros, onde tem dados sobre os livros, e utilizando o CRUD para pesquisar os livros por id, inserir novos livros para a biblioteca, remover o que não queremos mais e modificar seus dados. 

### :game_die: `Dados`

```
    {
        "_id": "62ad4cb77d4e4e409003c4e8",
        "title": "Mulheres que correm com os lobos",
        "author": "Clarissa Pinkola Estés",
        "publishingCompany": "Rocco",
        "pagesFromBook": 576
    }
```

### :warning: `CRUD` :warning:
</br>


| Verbo  | Descrição da Rota                      | Descrição da Rota                      |
| ------ | ---------------------------------------| ---------------------------------------|
| GET    | Listar todos os livros                 | localhost:1313/books/                  |
| GET    | Listar um livro específico             | localhost:1313/books/:id               |
| POST   | Adicionar novo livro                   | localhost:1313/books/                  |
| PUT    | Alterar informações do livro           | localhost:1313/books/:id               |
| PATCH  | Alterar numeros de pagina do livro     | localhost:1313/books/:id               |
| DELETE | Remover livro                          | localhost:1313/books/:id               |

[Books prints Postman | terminal](books-API-DB/booksREADME.md)


### :triangular_ruler: `Arquitetura` 
</br>

```
📁books-API-DB
├── 📁node_modules
├── 📁src
│   ├── 📁config
|       ├── 📄dbConnect.js
│   ├── 📁controllers
|       ├── 📄booksController.js
│   ├── 📁models
|       ├── 📄arquivo shema.png
|       ├── 📄books.js
│   ├── 📁routes
│       ├── 📄books.js
│       ├── 📄index.js
|   ├── app.js
├── 📄.gitignore
├── 📄booksREADME.md
├── 📄package-lock.json
├── 📄package.json
├── 📄server.js

```
</br>

----

<br>

> ## Games 	:video_game:

API com uma glossário gamer, onde tem dados sobre os games, e utilizando o CRUD pode favoritar os games, pesquisar por id, inserir novoss para a lista, remover o que não queremos mais e modificar seus dados. 

### :game_die: `Dados`

```
    {
        "_id": "62acbd25ed2e14eb1e42b1a2",
        "title": "The Sims 4",
        "launchYear": 2014,
        "consoles": [
            "PlayStation® 4",
            "Xbox One"
        ],
        "liked": true
    }
```

### :warning: `CRUD` :warning:
</br>


| Verbo  | Descrição da Rota                      | Descrição da Rota                      |
| ------ | ---------------------------------------| ---------------------------------------|
| GET    | Listar todos os games                  | localhost:1313/games/                  |
| GET    | Listar um game específico              | localhost:1313/games/:id               |
| POST   | Adicionar novo game                    | localhost:1313/games/                  |
| PUT    | Alterar informações do game            | localhost:1313/games/:id               |
| PATCH  | Favoritar/desfavoritar um game         | localhost:1313/games/:id               |
| DELETE | Remover game                           | localhost:1313/games/:id               |

[Games prints Postman | terminal](games-API-BD/gamesREADME.md)


### :triangular_ruler: `Arquitetura` 
</br>

```
📁games-API-BD
├── 📁node_modules
├── 📁src
│   ├── 📁config
|       ├── 📄dbConnect.js
│   ├── 📁controllers
|       ├── 📄games-API-BD.js
│   ├── 📁models
|       ├── 📄games.js
│   ├── 📁routes
│       ├── 📄games.js
│       ├── 📄index.js
|   ├── app.js
├── 📄.gitignore
├── 📄gamesREADME.md
├── 📄package-lock.json
├── 📄package.json
├── 📄server.js


```
</br>

----
<br>


> ## :mage_woman: Iniciando a API Nodejs
</br>

| Passo | Comando/informação       |
| --------- | ----------- |
| Clonar repositório | `https://github.com/camisarp/On16-TodasEmTech-S12-Intro-BD.git` |
| Inicie um projeto node | `npm init` |
| Instale o express | `npm i express` |
| Instale o nodemon | `npm i nodemon` |
| Instale o mongoose | `npm i mongoose` |
| No package.json, crie/modifique o script start   | `"start": "nodemon <nome do arquivo .js>"` |
| Crie o .gitignore     | `node_modules` |

<br>

`Essas dependências devem ser instaladas nas pastas principais de cada APIs`

<br>

> ## :zap: Tecnologias
</br>

| Ferramenta | Descrição |
| --- | --- |
| javascript | Linguagem de programação |
| nodejs | Ambiente de execução do javascript|
| npm | Gerenciador de pacotes|
| express |  Framework gerencia requisições de diferentes verbos HTTP em diferentes URLs|
| nodemon |  Biblioteca reinicia automaticamente o servidor. |
| mongoose |  Biblioteca do Nodejs que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação |
| git |  Sistema de controle de versão open source |
| Visual Studio Code | Editor de código de código aberto |
| Postman |  API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs |
| MongoDB Atlas | Serviço de banco de dados em nuvem, desenvolvido pela equipe oficial do MongoDB |
| Studio 3T | IDE multi-plataforma para o MongoDB, fornece uma interface de usuário com base em SQL para a construção e execução de consultas no MongoDB. |

<br>


----

<p align="center">
  <img src="https://user-images.githubusercontent.com/84551213/174421374-9176f37c-abd3-4e97-b830-d3d7f51f297c.gif" width= "400px"/>
</p>

<p align="center">
Desenvolvido por Camila Ribeiro, com o apoio das AMIGUES. :purple_heart:
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" />

</p>