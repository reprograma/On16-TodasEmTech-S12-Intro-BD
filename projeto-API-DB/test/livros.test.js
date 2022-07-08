const Livro = require("../src/models/livros.js");

// it e test dar no mesmo.
describe("Testes do modelo Livros", () => {
    const livro = new Livro({


        "id": 10,
        "titulo": "Amora",
        "autora": "Emicida",
        "editora": "Companhia das Letrinhas",
        "numeroPaginas": 44

    })
    it("Deve chamar o Schema e retornar um livro novo", () => {


        expect(livro.titulo).toBe("Amora");
    })
    //post.
    it("Deve salvar no banco de dados o novo livro", () => {
        livro.save().then((dados) => {
            expect(dados.titulo).toBe("Amora");
        })
    })
})
