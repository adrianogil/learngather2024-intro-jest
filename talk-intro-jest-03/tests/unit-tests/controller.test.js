const { handleGetPokemon } = require('../../controller');
const { getPokemons } = require('../../service');

// Mock the getPokemons function
jest.mock('../../service');

describe('handleGetPokemon', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn()
    };
  });

  test('should return pokemons with correct properties', async () => {
    // Arrange
    const mockPokemons = [
      { name: 'Pikachu', type: 'Electric', abilities: ['Static', 'Lightning Rod'] }
    ];
    getPokemons.mockResolvedValue(mockPokemons);

    // Act
    await handleGetPokemon(req, res);

    // Assert
    expect(getPokemons).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
      pokemons: [
        { name: 'Pikachu', type: 'Electric', abilities: ['Static', 'Lightning Rod'] }
      ]
    });
  });

  test('should handle empty pokemons array', async () => {
    // Arrange
    getPokemons.mockResolvedValue([]);

    // Act
    await handleGetPokemon(req, res);

    // Assert
    expect(getPokemons).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({ pokemons: [] });
  });
});
