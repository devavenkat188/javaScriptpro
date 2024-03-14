const {Sequelize, Model, DataTypes} = require('sequelize');
const {sequelize} = require('../../../../config/db_connect');
// const Asset = require('./asset_query');

const Trip = sequelize.define("trip", {
    Trip_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    Trip_startl: {
        type: DataTypes.TEXT,
    },
    Trip_endl: {
        type: DataTypes.TEXT,
    },
    Loadin_time: {
        type: DataTypes.TIME,
    },
    Loadout_time: {
        type: DataTypes.TIME,
    },
    Unloadin_time: {
        type: DataTypes.TIME,
    },
    Unloadout_time: {
        type: DataTypes.TIME,
    }
    },{
        tableName: "Trip",
        timestamps: false,

});

Trip.associate = function(models){
    Trip.belongsTo(models.Asset);
}
sequelize.sync({force: true});
console.log('Table Created');
module.exports = Trip;