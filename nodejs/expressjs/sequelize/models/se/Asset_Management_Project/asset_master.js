const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/asset_management_db');
// const Employee_Master = require('./employee_master');
const Asset_Category_Master = require('./asset_category_master');
const Asset_Master = sequelize.define("asset_master", {
    Asset_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        references: {
            model: "Asset_Category",
            key: 'id',
        } 
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

Asset_Master.associate = function(models) {
    Asset_Master.belongsTo(Asset_Category_Master, {
        foreignKey: 'Asset_id',
    });
}
Asset_Master.hasOne(Asset_Category_Master, {
    foreignKey: 'Asset_id',
}); 

sequelize.sync({ force: true });
console.log('Asset_Master Table Created');
module.exports = Asset_Master;