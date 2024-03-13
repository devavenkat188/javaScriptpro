const { Sequelize, Model, Op, DataTypes } = require("sequelize");
const { sequelize } = require('../../../config/db_connect');
const crypto = require('crypto');

function hash(value) {
    return crypto.createHash('sha1').update(value.toString()).digest('hex');
}

const User = sequelize.define("Product_Details", {
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // Getters
        get() {
            const rawValue = this.getDataValue('productName');
            return rawValue ? rawValue.toUpperCase() : null;
        }
    },
    productId: {
        type: DataTypes.TEXT,
        allowNull: false,
        // Setters
        set(value) {
            this.setDataValue('productId', (value, 1));
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
        // allowNull: false,
    },

}, {
    tableName: "Product_Details",
    timestamps: false,
});

(async () => {
    try {
        await sequelize.sync();
        console.log('Table Created Successfully');

        const userInstance = await User.create({ productName: 'Ice-Cream', productId: 1, quantity: 10 });
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
(async () => {
    const [User, metadata] = await sequelize.query("UPDATE User SET product_id = 23 WHERE product_id = 10");
})

module.exports = User;