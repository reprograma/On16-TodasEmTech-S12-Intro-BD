const Game = require("../src/models/games.js")

describe("Testes do modelo Games", () => {
    const game = new Game({
        "id": 10,
        "title": "Mario Kart",
        "launchYear": 1992,
        "consoles": ["play station one"],
        "liked": true
    })
    it("Deve chamar o Schema e retornar um game novo", () => {
        expect(game.title).toBe("Mario Kart");
    })

    it("Deve salvar no banco de dados o novo game", () => {
        game.save().then((dados) => {
            expect(dados.title).toBe("Mario Kart");
        })
    })
})