const request = require('supertest');
const { initDB } = require('../../models');
const app = require('../../http-server').app;

// Initialize the database before running the tests
beforeAll(async () => {
    await initDB();
});

test('Pokémon response contains required fields', async () => {
    const response = await request(app).get('/pokedex/');
    const pikachu = response.body.pokemons[0];
    expect(pikachu).toHaveProperty('name', 'Pikachu');
    expect(pikachu).toHaveProperty('type', 'Electric');
});



