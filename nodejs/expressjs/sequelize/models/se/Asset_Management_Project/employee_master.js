const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/asset_management_db');
const Asset_Master = require('./asset_master');
const Employee_Master = sequelize.define("employee_master", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
         references: {
            model: 'Asset_Master',
            key: 'id',
        }, 
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
    tableName: "Employee_Master",
    timestamps: false,
});

// Data initialization:

Employee_Master.associate = function(models) {
    Employee_Master.hasOne(models.Asset_Master);
} 
Employee_Master.hasOne(Asset_Master, {
    foreignKey: 'id',
}); 

sequelize.sync({ force: true });
console.log('Employee_Master Table Created');
module.exports = Employee_Master;
