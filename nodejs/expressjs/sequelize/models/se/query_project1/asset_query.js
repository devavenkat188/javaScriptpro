const {Sequelize, Model, DataTypes} = require('sequelize');
const {sequelize} = require('../../../../config/db_connect');
const Trip = require('./trip_query');

const Asset = sequelize.define("asset", {
    Asset_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'trip',
            key: 'Trip_id',
        },
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
    Asset.hasOne(models.Trip);
}
Asset.hasOne(Trip, {
    foriegnKey: 'Asset_id',
});
sequelize.sync({force: true});
console.log('Table Created');
module.exports = Asset;