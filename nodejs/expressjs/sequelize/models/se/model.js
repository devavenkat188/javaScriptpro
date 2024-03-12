const {DataTypes} = require('sequelize'); // sequelize --> is the datatypes.
const {sequelize} = require('../../../config/db_connect');
    const user = sequelize.define('User', { // define --> will have three properties, 1. user --> default table name.
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactDetails: {
            type: DataTypes.BIGINT,
        },
     }, {
        // freezeTableName: true, // this will dispaly the tableName as User.
        tableName: "Employee_Details", // for create customized table name.
        // timestamps: false, // it will remove the timestamps.
        timestamps: true,
        createdAt: false,
        updatedAt: 'updateTimeStamp', // by default we can re-name it.
    }); 

    // sequelize.sync({force: true}); // {force: true} --> which will delete the existing one & re-create new database.
    sequelize.sync({alter: true}); // {alter: true} --> which is used to add the columns.
    // sequelize.sync({force: true, match: /_test$/ }); // {match: /_test$/} --> if the datatbase name matches it will
   // be deleted.
    console.log('Table Created');
module.exports = user;