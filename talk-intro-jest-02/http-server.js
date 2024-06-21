const express = require('express');
const app = express();

// Pikachu data
const pikachu = {
  name: 'Pikachu',
  type: 'Electric',
  abilities: ['Static', 'Lightning Rod'],
};

const pokemons = [
    pikachu
];

// Define a GET endpoint for Pikachu
app.get('/pokedex/', (req, res) => {
  res.json({ pokemons });
});


exports.app = app;


