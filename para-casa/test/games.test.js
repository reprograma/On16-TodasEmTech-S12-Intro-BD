const Game = require("../src/models/games.js");

describe("Testes do modelo Games", () => {
    const game = new Game({
        id: 5,
        title: "Overcooked",
        launchYear: "2016",
        consoles: [
            "Microsoft Windows",
            "Playstation 4",
            "Xbox One",
            "Nintendo Switch"
        ],
        liked: true
    });
    it("Deve chamar o schema e retornar um novo game", () => {
        expect(game.title).toBe("Overcooked");
    });
    it("Deve salvar no banco de dados o novo game", () => {
        game.save().then((dados) => {
            expect(dados.title).toBe("Overcooked");
        });
    });
});