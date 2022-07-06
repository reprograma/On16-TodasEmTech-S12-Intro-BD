const Game = require('../src/models/games')

describe('Testes do modelo Games', () => {
    const game = new Game({
        "id": 10,
        "title": "Far Cry 3",
        "launchYear": 2012,
        "consoles": ['Ps4', 'Xbox One', 'Ps3', 'Xbox 360'],
        "liked": true
    })

    it('Deve chamar o schema e retornar um novo game', () => {
        expect(game.title).toBe('Far Cry 3')
    }) // teste para requisição GET

    it('Deve salvar um novo game no banco de dados', () => {
        game.save().then((dados) => {
            expect(dados.title).toBe('Far Cry 3')
        })
    })
})