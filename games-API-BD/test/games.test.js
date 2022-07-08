const Games = require('../src/models/games.js')

describe ("Tests Games",() => {

    const game = new Games({
        "id": 1,
        "title":"Super Mario Bros",
        "launchYear": 1985,
        "consoles": ["pc"],
        "liked": true
    })

    it('Should call schema and return a new game', () => {
        expect(game.title).toBe('Super Mario Bros')
    })

    it('Should save the new game in the database', () => {
        game.save().then((data) => {
            expect(data.title).toBe('Super Mario Bros')
        })
    })
})