const Sequelize = require('sequelize');

const sequelize = new Sequelize('workplace', 'postgres', 'Deva@1234', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = { sequelize };
