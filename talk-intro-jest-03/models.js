const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:'
});

const Pokemon = sequelize.define('Pokemon', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  abilities: {
    type: DataTypes.JSON,
    allowNull: false
  }
});

const initDB = async () => {
  await sequelize.sync({ force: true });

  // Seed database with Pikachu
  await Pokemon.create({
    name: 'Pikachu',
    type: 'Electric',
    abilities: ['Static', 'Lightning Rod']
  });
};

module.exports = { Pokemon, initDB };





