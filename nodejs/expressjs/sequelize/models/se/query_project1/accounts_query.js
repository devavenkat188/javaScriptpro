const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/db_connect');
const Asset = require('./asset_query');
const Account = sequelize.define("account", {
    Account_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Asset',
            key: 'Asset_id',
        }
    },
    Owner_Name: {
        type: DataTypes.TEXT,
    },
    Address: {
        type: DataTypes.STRING,
    },
    Mobile_number1: {
        type: DataTypes.BIGINT,
    },
    Mobile_number2: {
        type: DataTypes.BIGINT,
    },
    Vehicle_Name: {
        type: DataTypes.TEXT,
    },
    Total_Vehicle: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: "Account",
    timestamps: false,

});

// (async () => {
const initialData =[{ Account_id: 2, Owner_Name: "Raja", Address: "Salem", Mobile_number1: 6634598607, Mobile_number2: 9865479086, Vehicle_Name: "SRK Transport", Total_Vehicle: 26},
{ Account_id: 1, Owner_Name: "Kathir", Address: "Sankari", Mobile_number1: 8825460398, Mobile_number2: 8826475039, Vehicle_Name: "SPP Transport", Total_Vehicle: 10 },
{ Account_id: 3, Owner_Name: "Shankar", Address: "Erode", Mobile_number1: 8876570987, Mobile_number2: 6677854702, Vehicle_Name: "SUN Transport", Total_Vehicle: 100},
]
/*
for (const data of datas) {
    if (data) {
        Account.create(data)
    }
}
// }); */

Account.associate = function (models) {
    Account.hasOne(models.Asset);

}
Account.hasOne(Asset, {
    foreignKey: 'Account_id',
});

async function addData() {
    try {
        // Add initial data
        await sequelize.sync({ force: true });

        // Additional data to be added later
        const additionalData = [
            { Account_id: 4, Owner_Name: "Sathish", Address: "Sankari", Mobile_number1: 9944978695, Mobile_number2: 9976987489, Vehicle_Name: "Sathish Roadways", Total_Vehicle: 7 },
            { Account_id: 5, Owner_Name: "Venkat", Address: "Sankari", Mobile_number1: 9698575689, Mobile_number2: 9698575069, Vehicle_Name: "VDS Transport", Total_Vehicle: 15 }
        ];

        // Add additional data
        await Account.bulkCreate(additionalData);
        console.log('Additional data added.');
    } catch (error) {
        console.error('Error adding data:', error);
    }
}
addData();
/*
Account.associate = function (models) {
    Account.hasOne(models.Asset);

}
Account.hasOne(Asset, {
    foreignKey: 'Account_id',
});
*/

// sequelize.sync({ alter: true });
console.log('Table Created');
module.exports = Account;