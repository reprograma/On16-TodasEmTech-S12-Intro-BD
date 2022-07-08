const Serie = require("../src/models/series.js")

describe("Teste do modelo Series", () => {
    const serie = new Serie({
        "id": 25,
        "name": "30 rock",
        "genre": "comedy",
        "synopsis": "Adventures of a executive show runner for a late night show.",
        "liked": true,
        "seasons": 7 
    });
    it("Deve chamar o schema e retornar uma nova série", () => {
       expect(serie.name).toBe("30 rock");
    })
    it("Deve salvar no banco de dados a nova série", () => {
      serie.save().then((dados) =>{
        expect(dados.name).toBe("30 rock");
       });    
     });
 });