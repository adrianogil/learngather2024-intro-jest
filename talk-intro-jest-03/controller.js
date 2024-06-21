const {getPokemons} = require('./service')

handleGetPokemon = async (req, res) => {
    var pokemons = await getPokemons();
    pokemons = pokemons.map((
        { name, type, abilities }) => ({ name, type, abilities }));
    res.json({ pokemons });
};

exports.handleGetPokemon = handleGetPokemon;





