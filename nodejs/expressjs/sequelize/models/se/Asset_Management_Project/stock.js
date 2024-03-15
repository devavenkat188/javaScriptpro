const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require();
const Stock = sequelize.define("stock", {
    Stock_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    Stock_Name: {
        type: DataTypes.TEXT,
    },
    Quantity: {
        type: DataTypes.INTEGER,
    },
},{
    tableName: "Stock",
    timestamps: false,
});