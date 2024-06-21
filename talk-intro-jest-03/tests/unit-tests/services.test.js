
const { getPokemons } = require('../../service');
const { initDB } = require('../../models');

describe('getPokemons', () => {
    beforeAll(async () => {
        await initDB();
    });

    test('retorna um Pikachu com as properties corretas', async () => {
        const pokemons = await getPokemons();
        const pikachu = pokemons.find(p => p.name === 'Pikachu');
        expect(pikachu).toBeDefined();
        expect(pikachu).toHaveProperty('name', 'Pikachu');
        expect(pikachu).toHaveProperty('type', 'Electric');
        expect(pikachu).toHaveProperty('abilities', ['Static', 'Lightning Rod']);
    });
});




