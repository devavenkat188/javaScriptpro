const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const Employee_Master = require('./employee_master');
const Asset_Master = require('./asset_master');
const Asset_Category_Master = require('./asset_category_master');
// const { Sequelize } = require('../models');
const basename = path.basename(module.filename);
const sequelize = new Sequelize('workplace', 'postgres', 'Deva@1234', {
    host: 'localhost',
    dialect: 'postgres',
});
const db = {};
fs.readdirSync(__dirname) .filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})

.forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
    console.log(file, 'filename');
});
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
console.log("Table_created", Object.keys(db).join(", "));
db.Sequelize = Sequelize;

sequelize.sync({ force: true })
    .then(() => {
        console.log("Databse Synchronization Successfully");
        Object.keys(sequelize.models).forEach(modelName => {
            console.log(`Table Created: ${modelName}`);
        });
    })
    .catch(error => {
    console.log('Error in Synchronising database:', error);
});
// module.exports = db;
module.exports = {Employee_Master, Asset_Master, Asset_Category_Master};

