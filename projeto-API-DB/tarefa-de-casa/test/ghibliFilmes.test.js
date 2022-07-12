const Filme = require('../src/models/ghibliFilmes.js')

describe('Testes do modelo Filmes.', () => {
    it('Deve chamar o Schema e retornar um novo filme.', () => {
        const filme = new Filme({
            "id": 22,
            "titulo": 'O anjo da Morte',
            "diretor": 'Isao Takahashi',
            "produtor": 'Hyao Mysakia',
            "data de lancamento": 1980,
            "duracao": 120
        });

        expect(filme.titulo).toBe('O anjo da Morte');


        it('Deve criar um novo filme  e salvar no banco de dados.', () => {
            filme.save().then((dados) => {
                expect(dados.titulo).toBe('O anjo da Morte');
            });
        });
    })
})