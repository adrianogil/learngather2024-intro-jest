const express = require('express');
const { handleGetPokemon } = require('./controller');
const app = express();

// Define a GET endpoint for Pikachu
app.get('/pokedex/', handleGetPokemon);

exports.app = app;
