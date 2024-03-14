const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/db_connect');
const Asset = require('./asset_query');
const Account = sequelize.define("account", {
    Account_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Asset',
            key:'Asset_id',
        } 
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
    },
    Total_Vehicle: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: "Account",
    timestamps: false,

});
Account.associate = function (models) {
    Account.hasOne(models.Asset);
    
}
Account.hasOne(Asset, {
    foreignKey: 'Account_id',
});


sequelize.sync({ force: true });
console.log('Table Created');
module.exports = Account;