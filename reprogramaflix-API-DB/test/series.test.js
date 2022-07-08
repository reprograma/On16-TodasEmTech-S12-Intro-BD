const Serie = require("../src/models/series.js");

describe("Testes do modelo Series", () => {
    const serie = new Serie({
        "id": 17,
        "titulo": "Modern Family",
        "genero": "Comédia",
        "sinopse": "A rotina junto há uma diversa e cômica família americana",
        "favoritada": true
    });
    it("Deve chamar o schema e retornar uma nova Série", () => {
        expect(serie.titulo).toBe("Modern Family");
    });
    it("Deve salvar no banco de dados a nova Série", () => {
        serie.save().then((dados) => {
            expect(dados.titulo).toBe("Modern Family");
        });
    });
});