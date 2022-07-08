const request = require("supertest");
const app = require("../src/app");

let elementId;

describe("Games API Test", () => {
  test("Get Games", (done) => {
    request(app)
      .get("/games")
      .expect(200)
      .expect((res) => {
        expect(res.body.length).not.toBe(0);
        expect(res.body[0].title).toBe("Fall Guys");
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("Post Game", (done) => {
    request(app)
      .post("/games")
      .expect("Content-Type", /json/)
      .send({
        title: "Joguinho RAIVOSO",
        launchYear: 2022,
        consoles: ["pc"],
        liked: true,
      })
      .expect(201)
      .expect(res.body.title).toBe("Joguinho RAIVOSO")
      .end((err, res) => {
        if (err) return done(err);
        elementId = res.body.savedGame._id;
        return done();
      });
  });
});

test("Patch Game", (done) => {
  request(app)
    .patch(`/games/${elementId}`)
    .expect("Content-Type", /json/)
    .send({
      title: "Joguinho RAIVOSO",
      launchYear: 2022,
      consoles: ["pc"],
      liked: false,
    })
    .expect(200)
    .expect((res) => {
      expect(res.body.message).toBe(`Like atualizado!`)
    })
    .end((err, res) => {
      if(err) return done(err)
      return done()
    })
});

test("Delete Game", (done) => {
  request(app)
    .delete(`/games/${elementId}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect((res) => {
      expect(res.body.message).toBe(`Jogo deletado com sucesso!`);
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});