![download](https://user-images.githubusercontent.com/100974682/171773873-d48bfcdb-0921-45a4-8d7a-c31048ff0c78.png)
<h1 align="center">
    <br>
    <p align="center"># On16-TodasEmTech-S15-Automacao-Testes 🚀 <p> 
</h1>

# ⚠️ São dois projetos em um só, porém a principal é a seguir:
O nível da nossa aula é introdutório, onde aprenderemos o que é e como fazer testes desde a fase inicial de construção de uma aplicação (teste unitário), como também na fase de um projeto já pronto e estruturado (teste de API). Vamos entender os tipos e regras de testes, conceitos que envolvem qualidade, investimentos e a famosa pirâmide de testes. 

Nós iremos colocar a mão no código, padronizando códigos com o ESLint e criando testes com as ferramentas Jest e Supertest.

Durante a aula, nós  utilizamos dois projetos:

- O diretório projeto1 que foi para testes estáticos e unitários. Vamos criar alguns códigos, padronizar e fazer leitura de testes usando ESLint, e fazer testes manuais construindo um framework. 

- O segundo projeto que foi para teste de API, nos guiaremos com o arquivo md ``testesAPI.md``. Se observarem, é a mesma API Livraria que praticamos na aula de integração MongoDB. O objetivo é testar os endpoints que elaboramos. Aprenderemos como testar com as ferramentas Jest e Supertest.

----------------------------------------

## ATIVIDADE PARA CASA

A atividade para casa foi reproduzir os testes na mesma API que utilizei  na atividade da aula Integração Banco de Dados.

## Por onde começamos?

### TESTES DE API 

Aprendemos sobre testes estáticos e unitários, leitura de relatório das ferramentas ESLint e Jest.
Iremos testar a mesma API que trabalhamos na aula de Integração Banco de Dados
```
### Passo a passo - Instalação

Dentro do arquivo ``projeto-api-db``, você deverá realizar os seguintes passos:

- Instalar o ESLint, iniciar a ferramenta e configurar no mesmo estilo que fizemos na pasta projeto1.

```js
npm install --save-dev eslint@8.16.0 --save-exact
```
```js
npx eslint --init
```
- Também precisamos instalar a ferramenta Jest, para conseguirmos visualizar os relatórios de testes. 

```js
npm install --save-exact jest@28.1.0 --save-dev 
``` 

Não esqueça de criar o script no package.json, para facilitar no processo de execução do teste. 

```js
"test:watch": "jest --watchAll"
```


# 🧠Falando um pouquinho do contexto

### Criando ambiente de teste

Agora que instalamos todas as dependências necessárias, podemos preparar nosso amniente de testes.

Na raiz do projeto, cria uma pasta chamada ``test``, dentro dela um arquivo chamado ``livros.test.js``. 

Para começar, deveremos importar o nosso schema modelo que está dentro da pasta models.

```js
const Livro = require("../models/livros.js");
```

Vamos começar a testar nossa rota de GET/READ da nossa API. Usando os métodos ``describe``, ``expect``, ``toBe``.

```js
describe("Testes do modelo Livros", () => {
   it("Deve chamar o schema e retornar um novo livro", ()  => {
	  const livro = new Livro({
	  "id": 10,
  	"titulo": "Amora",
  	"autor":	"Emicida",
  	"editora": "Companhia das Letrinhas",
	  "numeroPaginas": 44
     });
     expect(livro.titulo).toBe("Amora");
   })
})
```

Vamos executar nosso primeiro teste no terminal? 

```js
npm run test:watch
```

Vamos fazer nosso segundo teste, iremos usar uma estrutura chamada de ``asserção``, que é um agrupamento de testes. 

Será preciso refatorar nosso código, fazendo algumas mudanças. 

```js
describe("Testes do modelo Livros", () => {
  const livro = new Livro({
	  "id": 10,
  	"titulo": "Amora",
  	"autor":	"Emicida",
  	"editora": "Companhia das Letrinhas",
	  "numeroPaginas": 44
  });
  it("Deve chamar o schema e retornar um novo livro", () => {
    expect(livro.titulo).toBe("Amoras");
  });
});
```
Agora podemos continuar com os teste, usando a sintaxe de asserção, graças a função ``describe`` e a palavra reservada``it``.

Na linha seguinte, na penúltima chave e parenteses, vamos colocar um novo teste, iremos testar nossa rota Post/Create.

```js
  it("Deve salvar no banco de dados o novo livro", () => {
    livro.save().then((dados) => {
      expect(dados.titulo).toBe("Amoras");
    });
  });
```

O teste completo, deverá ficar da seguinte forma:

```js
describe("Testes do modelo Livros", () => {
  const livro = new Livro({
	  "id": 10,
  	"titulo": "Amora",
  	"autor":	"Emicida",
  	"editora": "Companhia das Letrinhas",
	  "numeroPaginas": 44
  });
  it("Deve chamar o schema e retornar um novo livro", () => {
    expect(livro.titulo).toBe("Amoras");
  });
  it("Deve salvar no banco de dados o novo livro", () => {
    livro.save().then((dados) => {
      expect(dados.titulo).toBe("Amoras");
    });
  });
});
```

## Conclusão:


![bebe](https://user-images.githubusercontent.com/100974682/167978711-3c0b4a06-6cd6-4c1f-99f5-19b62dd58fca.jpg)
 
---
**# Segue minhas redes sociais, me add.**  :)

- [linkedin](https://www.linkedin.com/in/b%C3%A1rbara-gon%C3%A7alves-211b5691/)
- [github](https://github.com/idbabis) 
- E-mail: idbabis@gmail.com
---