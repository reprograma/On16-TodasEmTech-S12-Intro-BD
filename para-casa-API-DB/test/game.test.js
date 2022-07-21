const Game = require("../src/models/games.js");

describe("Testes do modelo Jogos", () => {
  const game = new Game({
    id: 10,
    title: "Just Dance",
    launchYear: 2021,
    consoles: ["Nintendo"],
    liked: true,
  });
// a partir daqui que inicia o teste
  it("Deve chamar o schema e retornar um novo game", () => {
    expect(game.title).toBe("Just Dance");
  });

  it("Deve salvar no banco de dados o novo game", () => {
    game.save().then((dados) => {
      expect(dados.title).toBe("Just Dance");
    });
  });
});

//inicia o arquivo chamando o arquivo do schema no models
//describe usa para juntar o teste, organiza as funções para realizar o teste
// it descre o comportamento esperado
// expect usa para comparação
// toBe compara e fazer a igualdade
// save método utilizado para banco de dado
// then e uma palavra reservado metodo com parametro que vai atribuir o que for definido dentro do parenteses.

// para testar este código no terminal npm run test:watch
