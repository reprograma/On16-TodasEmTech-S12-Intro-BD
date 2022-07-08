const Game = require ("../src/models/games.js")
const mongoose = require ("mongoose");
const bancoConnect= async()=>{
    try {
        await mongoose.connect("mongodb+srv://PriscillaFCorreia05:pridb0501@cluster0.yy3mi.mongodb.net/reprograma-teste")
    } catch (error) {
        console.error(error);   
    }
}
describe ("Testes do modelo Games",() => {
    const game = new Game({
        "id": 10,
        "title":"The sims",
        "launchYear": 2006,
        "consoles": ["play station one"],
        "liked": true
        
    })
    //GET
    
    it("Deve chamar o Schema e retornar um game novo", () => {
        
        
        expect(game.title).toBe("The sims");
    })
    //POST
    
    it("Deve salvar no banco de dados o novo game",async () => {
        await bancoConnect()
        const dados = await game.save()
        expect(dados.title).toBe("The sims");
       
    })

    
})

