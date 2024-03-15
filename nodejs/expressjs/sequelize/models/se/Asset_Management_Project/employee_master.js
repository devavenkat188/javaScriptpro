const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require();

const Employee_Master = sequelize.define("employee_master", {
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
    tableName: "Employee_Master",
    timestamps: false,
});

// Data initialization:

Employee.associate = function(models) {
    Employee.hasOne(models.Asset_Master);
}
Employee.hasOne(Asset_Master, {
    foreignKey: 'id',
});

sequelize.sync({ force: true });
console.log('Employee_Master Table Created');
module.exports = Employee_Master;