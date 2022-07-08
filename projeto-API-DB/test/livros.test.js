const Livro = require("../src/models/livros");

describe("Testes do modelo Livros", () => {
  const livro = new Livro({
    //esse 'new é para ser criado um novo modelo
    id: 10,
    titulo: "Amora",
    autor: "Emicida",
    editora: "Companhia das Letrinhas",
    numeroPaginas: 44,
  });
  it("Deve chamar o schema e retornar um novo livro.", () => {
    expect(livro.titulo).toBe("Amora");
  });
  it("Deve salvar no banco de dados um novo livro", () => {
    livro.save().then((dados) => {
      expect(dados.titulo).toBe("Amora");
    });
  });
});
