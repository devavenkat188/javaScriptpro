const {Sequelize, Model, DataTypes} = require('sequelize');
const {sequelize} = require('../../../../config/db_connect');
const Trip = require('./trip_query');

const Asset = sequelize.define("asset", {
    Asset_id: {
        type: DataTypes.INTEGER,
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
    foreignKey: 'Asset_id',
});

sequelize.sync({force: true}).then(()=> {
    console.log('Table Created');
}).catch(error => {
    console.log('Error Sync tables:', error);
})
// console.log('Table Created');
module.exports = Asset;