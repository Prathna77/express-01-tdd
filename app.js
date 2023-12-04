const express = require("express");
const app = express();
const movies = [
  { title: "StarWars", id: 1 },
  { title: "ToyStory", id: 2 },
  { title: "Minimoys", id: 3 },
];

app.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id == id);
  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).json();
  }
});

module.exports = app; //export
