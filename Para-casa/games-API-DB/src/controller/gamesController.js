const games = require("../models/games.json");

const fs = require("fs");

const getAllGames = (req, res) => {
  try {
    res.status(200).json({
      GameStore: games,
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getById = (req, res) => {
  const gamesReq = req.params.id;
  const gamesFilter = games.filter((games) => games.id == gamesReq);
  if (gamesFilter.length > 0) {
    res.status(200).send(gamesFilter);
  } else {
    res.status(404).send({
      message: "Not Found",
    });
  }
};

const addNewGame = (req, res) => {
  const { id, title, launchYear, consoles, liked } = req.body;
  games.push({
    id: games.length + 1,
    title,
    launchYear,
    consoles,
    liked,
  });
  fs.writeFile(
    "./src/models/games.json",
    JSON.stringify(games),
    "utf8",
    function (err) {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        console.log("File created successfully");
        const gameFound = games.find((game) => game.id == id);
        res.status(200).send(gameFound);
      }
    }
  );
  res.status(201).send({ message: "Game added successfully" });
};

const updateGame = (req, res) => {
  let idReq = req.params.id;
  let gameReq = req.body;

  const gameFound = games.find((game) => game.id == idReq);
  const gameIndex = games.indexOf(gameFound);

  if (gameIndex != -1) {
    gameFound.body = gameReq;
    games.slice(gameIndex, 1, gameReq);
    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(games),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("File updated successfully");
          const gameFound = games.find((game) => game.id == id);
          res.status(200).send(gameFound);
        }
      }
    );
    res.status(200).json({
      message: "Game updated successfully",
      games,
    });
  }
};

const deleteGame = (req, res) => {
  const idReq = req.params.id;
  const gameIndex = games.findIndex((game) => game.id == idReq);

  games.splice(gameIndex, 1);

  if (gameIndex != -1) {
    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(games),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: "internal error server" });
        } else {
          console.log("File deleted successfully");
        }
      }
    );
    res.status(200).json({
      message: "Game deleted successfully",
      "deleted game": idReq,
      games,
    });
  } else {
    res.status(404).json({
      message: "Game not found",
    });
  }
};

const gameRankUpdated = (req, res) => {
  let idReq = req.params.id;
  let rankReq = req.body.liked;

  const gameFound = games.find((game) => game.id == idReq);
  const gameIndex = games.indexOf(gameFound);

  if (gameIndex != -1) {
    gameFound.liked = rankReq;

    games.splice(gameIndex, 1, gameFound);

    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(games),
      "utf8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("File updated successfully");
          const gameUpdated = games.find((game) => game.id == idReq);
          res.status(200).send(gameUpdated);
        }
      }
    );
  } else {
    res.status(404).send({
      message: "Game not found",
    });
  }
};

module.exports = {
  getAllGames,
  getById,
  addNewGame,
  updateGame,
  deleteGame,
  gameRankUpdated,
};
