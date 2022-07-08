const Games = require('../src/models/games.js');

//Teste da rota GET/READ usando método describe, expect, toBe.
describe("Testes do modelo Games", () => {
    it("Deve chamar o schema e retornar um novo game", () => {
        const games = new Games({
            "id": 20,
            "titulo": "Tetris",
            "autor": "Zé do Tetris",
            "launchYear": 2000,
            "consoles": "celular",
            "liked": true,
            "likeGame": true
        });
        expect(games.titulo).toBe("Tetris");
    })
})

//2° teste com a estrutura asserção
describe("Testes do modelo Games", () => {
    const games = new Games({
        "id": 20,
        "titulo": "Tetris2",
        "autor": "Zé do Tetris",
        "launchYear": 2002,
        "consoles": "PC",
        "liked": true,
        "likeGame": true
    });
    it("Deve chamar o schema e retornar um novo game", () => {
        expect(games.titulo).toBe('Tetris2');
    });
    //Testando a rota Post/Create
    it('Deve salvar no banco de dados o novo game', () => {
        games.save().then((dados) => {
            expect(dados.titulo).toBe('Tetris3');
        });
    });
});

