const Livro = require('../src/models/livros')

describe('Testes do modelo Livros', () => {
    const livro = new Livro({
        "id": 10,
        "titulo": "Amora",
        "autor": "Emicida",
        "editora": "Companhia das Letrinhas",
        "numeroPaginas": 44
    })
    it('Deve chamar o schema e retornar um novo livro', () => {
        expect(livro.titulo).toBe("Amora")
    }) // teste para a requisição GET

    it('Deve salvar um novo livro no banco de dados', () => {
        livro.save().then((dados) => {
            expect(dados.titulo).toBe("Amora")
        }) // teste para a requisição POST
    })
})



