const request = require('supertest');
const app = require('../http-server').app;

test('Pokémon response contains required fields', async () => {
    const response = await request(app).get('/pokedex/');
    const pikachu = response.body.pokemons[0];
    expect(pikachu).toHaveProperty('name', 'Pikachu');
    expect(pikachu).toHaveProperty('type', 'Electric');
});





