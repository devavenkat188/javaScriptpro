const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require();

const Employee = sequelize.define("employee", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    Employee_Name: {
        type: DataTypes.TEXT,
    },
    Designation: {
        type: DataTypes.TEXT,
    },
    DOB: {
        type: DataTypes.DATE
    },
    Mobile_Number: {
        type: DataTypes.BIGINT,
    },
    Salary: {
        type: DataTypes.INTEGER,
    },
    Experience: {
        type: DataTypes.INTEGER,
    },
    Status: {
        type: DataTypes.TEXT,
    },
},{
    tableName: "Employee",
    timestamps: false,
});