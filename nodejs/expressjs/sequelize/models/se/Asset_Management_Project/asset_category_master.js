const { Sequelize, Model, DataTypes } = require('sequelize');
// const {Asset_Master} = require('./asset_master');
const { sequelize } = require('../../../../config/asset_management_db');
const Asset_Category_Master = sequelize.define("Asset_category_master", {
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

/*Asset_Category_Master.associate = function(models) {
    Asset_Category_Master.belongsTo(Asset_Master);
} */


module.exports = Asset_Category_Master;
