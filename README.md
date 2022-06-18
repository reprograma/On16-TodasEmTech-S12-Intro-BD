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
      "id": 19,
      "title": "Hold My Hand",
      "launchYear": "2022",
      "favorited": true,
      "artists": [
          "Lady Gaga"
       ]
}
```

### :warning: `CRUD` :warning:
</br>


| Verbo  | Descrição da Rota                      | Descrição da Rota                      |
| ------ | ---------------------------------------| ---------------------------------------|
| GET    | Listar todos os livros                 | Descrição da Rota                      |
| GET    | Listar um livro específico             | Descrição da Rota                      |
| POST   | Adicionar novo livro                   | Descrição da Rota                      |
| PUT    | Alterar informações do livro           | Descrição da Rota                      |
| PATCH  | Alterar numeros de pagina do livro     | Descrição da Rota                      |
| DELETE | Remover livro                          | Descrição da Rota                      |

[Musics prints Postman | terminal](src/../reprogramafy/src/musicasREADME.md)


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
      "id": 19,
      "title": "Hold My Hand",
      "launchYear": "2022",
      "favorited": true,
      "artists": [
          "Lady Gaga"
       ]
}
```

### :warning: `CRUD` :warning:
</br>


| Verbo  | Descrição da Rota                      | Descrição da Rota                      |
| ------ | ---------------------------------------| ---------------------------------------|
| GET    | Listar todos os games                  | Descrição da Rota                      |
| GET    | Listar um game específico              | Descrição da Rota                      |
| POST   | Adicionar novo game                    | Descrição da Rota                      |
| PUT    | Alterar informações do game            | Descrição da Rota                      |
| PATCH  | Favoritar/desfavoritar um game         | Descrição da Rota                      |
| DELETE | Remover game                           | Descrição da Rota                      |

[Musics prints Postman | terminal](src/../reprogramafy/src/musicasREADME.md)


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

> ## :zap: `Tecnologias`
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
  <img src="https://user-images.githubusercontent.com/84551213/171315925-9e44d438-7b33-4301-b420-7f5da30a7531.gif" width= "400px"/>
</p>

<p align="center">
Desenvolvido por Camila Ribeiro, com o apoio das AMIGUES. :purple_heart:
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" />

</p>