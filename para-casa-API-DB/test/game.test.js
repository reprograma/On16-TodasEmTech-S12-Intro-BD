const Game = require("../src/models/games.js");

describe("Testes do modelo Jogos", () => {
  const game = new Game({
    "id": 10,
    title: "Just Dance",
    launchYear: 2021,
    consoles: ["Nintendo"],
    liked: true,
  });

  it("Deve chamar o schema e retornar um novo game", () =>{
    expect(game.title).toBe("Just Dance");
  });

  it("Deve salvar no banco de dados o novo game", () =>{
    game.save().them((dados) => {
      expect(dados.title).toBe("Just Dance")
    })
  })
})