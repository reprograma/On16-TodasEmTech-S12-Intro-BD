const Book = require("../models/books.js");

describe("Testes do modelo Livros", () => {

    const books = new Book({
        "id": 10,
        "title": "Amora",
        "author": "Emicida",
        "publishingCompany": "Companhia das Letrinhas",
        "pagesFromBook": 44
    });
    it("Deve chamar o schema e retornar um novo livro", () => {
        expect(books.title).toBe("Amora")
    });
    it("Deve salvar no banco de dados o novo livro", () => {
        books.save().then((dados) => {
            expect(dados.title).toBe("Amora")
        })
    })
})