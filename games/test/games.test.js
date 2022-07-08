const Games = require("../src/models/games.js")

describe("Teste de models", () => {
  const game = new Games({
    id: "4",
    title: "Shuri Bros.",
    launchYear: "2019",
    consoles: "Wii",
    liked: "true"
  })

  it("Deve chamar o Schema e retornar o novo game", () => {
    expect(game.title).toBe("Shuri Bros.")
  });
  it("Deve salvar o novo game no banco de dados", () => {
    game.save().then((dados) => {
      expect(dados.title).toBe("Shuri Bros.")
    })
  })
})
