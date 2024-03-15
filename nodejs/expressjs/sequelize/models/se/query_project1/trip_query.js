const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/db_connect');
const Asset = require('./asset_query');

const Trip = sequelize.define("Trip", {
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
}, {
    tableName: "Trip",
    timestamps: false,

});
let values = [{ Trip_id: 1, Trip_startl: "Chennai", Trip_endl: "Pune", Loadin_time: '14:34', Loadout_time: '6:30', Unloadin_time: '10:50', Unloadout_time: '21:9', Asset_id: 2 },
{ Trip_id: 2, Trip_startl: "Erode", Trip_endl: "Maharastra", Loadin_time: '7:32', Loadout_time: '11:50', Unloadin_time: '18:6', Unloadout_time: '22:08', Asset_id: 1 },
{Trip_id: 3, Trip_startl: "Kashmir", Trip_endl: "Kerala", Loadin_time: '12:10', Loadout_time: '17:06', Unloadin_time: '8:04', Unloadout_time: '11:45', Asset_id: 3}];

for(const value of values) {
    if(value) {
        Trip.create(value)
    }
}
Trip.associate = function (models) {
    Trip.belongsTo(Trip, {
        foreignKey: 'Asset_id',
    });
}

sequelize.sync({ force: true }).then(() => {
    console.log('Table Created');
}).catch(error => {
    console.log('Error in Sync table:', error);
});

module.exports = Trip;
