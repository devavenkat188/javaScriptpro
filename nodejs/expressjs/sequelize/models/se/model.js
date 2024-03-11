const {DataTypes} = require('sequelize'); // sequelize --> is the datatypes.

module.exports = function(sequelize) {
    const user = sequelize.define('User', { // define --> will have three properties, 1. user --> default table name.
        firstName: {
            type: DataTypes.STRING,     // 2. firstName, lastName --> these are the properties.
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
        freezeTableName: true, // this will dispaly the tableName as User.
    });
    // sequelize.sync({force: true}); // {force: true} --> which will delete the existing one & create new database.
    sequelize.sync({alter: true});
}