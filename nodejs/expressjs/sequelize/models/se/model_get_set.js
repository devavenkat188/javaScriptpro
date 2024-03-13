const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require('../../../config/db_connect');
const bcrypt = require('bcrypt');

const User = sequelize.define("Product_Details", {
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
        // Getters
        get() {
            const rawValue = this.getDataValue('productName');
            return rawValue ? rawValue.toUpperCase() : null;
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // Setters
        set(value) {
            this.setDataValue('productId', hash(value));
        }
    },
    productCategory: {
        type: DataTypes.VIRTUAL, // Virtual fields --> but in reality they don't even exist in the database.
        get() {
            return `${this.productId} ${this.productName}`;
        },
        set(value) {
            throw new Error("don't try to set productName values");
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    tableName: "Product_Details",
    timestamps: false,
});

(async () => {
    try {
        await sequelize.sync();
        console.log('Table Created Successfully');

        const userInstance = await User.create({ productName: 'Ice-Cream', productId: 1 });
        console.log(userInstance.productName);
        console.log(userInstance.getDataValue('productName'));
        console.log(userInstance.productId);
        console.log(userInstance.getDataValue('productId'));
        console.log(userInstance.productCategory);

        const users = await User.findAll();
        console.log(users);
    }
    catch (error) {
        console.log('Error:', error);
    }
})();

module.exports = User;