const Sequelize = require('sequelize');

const sequelize = new Sequelize('workplace', 'postgres', 'Deva@1234', {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports = { sequelize };
