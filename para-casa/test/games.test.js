const Game = require("../games/src/models/games.js");

describe("Testes do modelo Games", () => {
  const game = new Game ({
    id: 4,
    title: "Babi Switch",
    launchYear: "1986",
    consoles: [
        "superNintendo",
        "mega drive",
        "master system"
    ],
    liked: false,
  });
  it("Deve chamar o schema e retornar um novo game", () => {
    expect(game.title).toBe("Babi Switch");
  });
  it("Deve salvar no banco de dados o novo game", () => {
    game.save().then((dados) => {
      expect(dados.title).toBe("Babi Switch");
    });
  });
});

