
const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/db_connect');
const Account = require('./accounts_query');
const Trip = require('./trip_query');

const Asset = sequelize.define("asset", {
    Asset_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'trip',
            key: 'Trip_id',
        }
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

}, {
    tableName: "Asset",
    timestamps: false,

});

let values = [{ Asset_id: 1, Owner_Name: "Kathir", Status: true, Vehicle_Name: "SPP Transport", Account_id: 1},
{ Asset_id: 2, Owner_Name: "Shankar", Status: true, Vehicle_Name: "SUN Transport", Account_id: 3 },
{Asset_id: 3, Owner_Name: "Raja", Status: false, Vehicle_Name: "SRK Transport", Account_id: 2}];

for (const value of values) {
    if(value) {
        Asset.create(value)
    }
}
Asset.associate = function (models) {
    Asset.belongsTo(Asset, {
        foreignKey: 'Account_id',
    });
    // Asset.hasOne(Trip, {
    // foreignKey: 'Asset_id',
    // });
}

Asset.hasOne(Trip, {
    foreignKey: 'Asset_id',
});


sequelize.sync({ force: true }).then(() => {
    console.log('Table Created');
}).catch(error => {
    console.log('Error Sync tables:', error);
})
// console.log('Table Created');
module.exports = Asset;
