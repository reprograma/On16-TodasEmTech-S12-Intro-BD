const Serie = require('../src/models/seriesModel')


describe('Testes do modelo Series', () => {
    const serie = new Serie({
        "id":5,
        "titulo": "Anne With An E",
        "autor": "Moira Walley-Beckett",
        "genero": "drama",
        "liked": "true"
    })
    it('Deve chamar o schema e retornar uma nova serie.', () => {  
        expect(serie.titulo).toBe("Anne With An E");  
    })
    it('Deve salvar no banco de dados a nova série.', () => {
        serie.save().then((dados) => {
          expect(dados.titulo).toBe("Anne With An E")
        })
    })
})