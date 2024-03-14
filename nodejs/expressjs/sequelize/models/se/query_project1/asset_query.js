const {Sequelize, Model, DataTypes} = require('sequelize');
const {sequelize} = require('../../../../config/db_connect');

const Asset = sequelize.define("asset", {
    Asset_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    Owner_Name: {
        type: DataTypes.TEXT,
    },
    Status: {
        type: DataTypes.BOOLEAN,
    },
    Vehicle_Name: {
        type: DataTypes.TEXT,
    },
    
    },{
        tableName: "Asset",
        timestamps: false,

});

Asset.associate = function(models){
    Asset.belongsTo(models.Account);
}

sequelize.sync({force: true});
console.log('Table Created');
module.exports = Asset;