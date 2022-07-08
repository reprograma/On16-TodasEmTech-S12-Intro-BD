const Game = require('../src/models/games')

describe('Test of Game models', () => {
    const game = new Game({
        "id": "4",
        "title": "Cyberpunk 2077",
        "launchYear": 2020,
        "consoles": ['Ps4', 'Xbox One', 'Ps5', 'Microsoft Windows'],
        "liked": true
    })

    it('Should call schema and return a new Game', () => {
        expect(game.title).toBe('Cyberpunk 2077')
    })

    it('Should save a new game in the database', () => {
        game.save().then((dados) => {
            expect(dados.title).toBe('Cyberpunk 2077')
        })
    })
})