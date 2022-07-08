const Livro = require("../src/models/livros.js");

//Teste da rota GET/READ usando método describe, expect, toBe.
describe("Testes do modelo Livros", () => {
    it("Deve chamar o schema e retornar um novo livro", () => {
        const livro = new Livro({
            "id": 10,
            "titulo": "Amora",
            "autor": "Emicida",
            "editora": "Companhia das Letrinhas",
            "numeroPaginas": 44
        });
        expect(livro.titulo).toBe("Amora");
    })
})

//2° teste com a estrutura asserção
describe("Testes do modelo Livros", () => {
    const livro = new Livro({
        "id": 10,
        "titulo": "Amora",
        "autor": "Emicida",
        "editora": "Companhia das Letrinhas",
        "numeroPaginas": 44
    });
    it("Deve chamar o schema e retornar um novo livro", () => {
        expect(livro.titulo).toBe('Amora');
    });
    //Testando a rota Post/Create
    it('Deve salvar no banco de dados o novo livro', () => {
        livro.save().then((dados) => {
            expect(dados.titulo).toBe('Amora');
        });
    });
});