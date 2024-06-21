const { Pokemon, initDB } = require('./models');

// Initialize the database and seed it with data
initDB().then(() => {
    console.log('Database initialized');
  });

const getPokemons = async () => {
    return await Pokemon.findAll();
};

exports.getPokemons = getPokemons;



