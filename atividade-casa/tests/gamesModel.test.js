const Game = require("../src/model/gamesModel");

describe("Games Model Test", () => {
  const game = new Game({
    id: 10,
    title: "Joguinho Meia Boca",
    launchYear: 2022,
    consoles: ["pc"],
    liked: true,
  });

  test("Must call the schema and return a new game;", () => {
    expect(game.title).toBe("Joguinho Meia Boca");
  });

  test("Must save a new game in the database;", () => {
    game.save().then((dados) => {
      expect(dados.liked).toBe(true);
    });
  });

  test("Must delete Joguinho Meia Boca", () => {
    game.deleteOne({ id: {$gte: game.id} }).then(function(err, res){
      expect(res.message).toBe("Jogo deletado com sucesso!");
  });
  })
});