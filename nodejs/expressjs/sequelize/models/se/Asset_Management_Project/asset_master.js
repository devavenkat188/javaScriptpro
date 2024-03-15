const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require();

const Asset_Master = sequelize.define("asset_master", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    Serial_Number: {
        type: DataTypes.INTEGER,
    },
    Asset_Name: {
        type: DataTypes.TEXT,
    },
    Model: {
        type: DataTypes.TEXT,
    },
    Make: {
        type: DataTypes.TEXT,
    },
    Asset_Cost: {
        type: DataTypes.INTEGER,
    },
    Asset_total: {
        type: DataTypes.INTEGER,
    },
},{
    tableName: "Asset_Master",
    timestamps: false,
});