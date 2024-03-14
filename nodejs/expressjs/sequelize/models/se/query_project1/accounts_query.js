const {Sequelize, Model, DataTypes} = require('sequelize');
const {sequelize} = require('../../../../config/db_connect');

const Account = sequelize.define("account", {
    Account_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    Owner_Name: {
        type: DataTypes.TEXT,
    },
    Address: {
        type: DataTypes.STRING,
    },
    Mobile_number1: {
        type: DataTypes.BIGINT,
    },
    Mobile_number2: {
        type: DataTypes.BIGINT,
    },
    Vehicle_Name: {
        type: DataTypes.TEXT,
    }
    },{
        tableName: "Account",
        timestamps: false,

});
sequelize.sync({force: true});
console.log('Table Created');
module.exports = Account;