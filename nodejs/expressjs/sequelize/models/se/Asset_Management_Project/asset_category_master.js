const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require();
const Asset_Category = sequelize.define("asset_category", {
    Asset_Category_Name: {
        type: DataTypes.TEXT,
    },
    Asset_Type: {
        type: DataTypes.TEXT,
    },
    Available_Asset: {
        type: DataTypes.INTEGER,
    },
},{
    tableName: "Asset_Category_Master",
    timestamps: false,
});