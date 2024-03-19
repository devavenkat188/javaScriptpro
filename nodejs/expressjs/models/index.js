"use strict";

const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const basename = path.basename(module.filename);
const sequelize = new Sequelize('database_model', 'postgres', 'Deva@1234', {
    host: 'localhost',
    dialect: 'postgres',
});

const db = {}; 

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
        console.log(file, 'filename');
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
console.log("Tables Created", Object.keys(db).join(", "));
db.Sequelize = Sequelize;

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database synchronization completed successfully.');
        // Check if the tables are created and log their names
        Object.keys(sequelize.models).forEach(modelName => {
            console.log(`Table created: ${modelName}`);
        });
    })
    .catch(error => {
        console.error('Error synchronizing database:', error);
    });



module.exports = db;

/*
"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var sequelize = new Sequelize('database_model', 'postgres', 'Deva@1234', {
    host: 'localhost',
    dialect: 'postgres',
});

var db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== basename);
    })
    .forEach(function (file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
        console.log(file)
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
console.log("Table Created", db.sequelize);
db.Sequelize = Sequelize;
module.exports = db;
*/
// Redis db config 
/*
var redis   = require("redis");


var redisClient = redis.createClient(config['redisPort'], config['redisUrl'], {
  no_ready_check: true,
  retry_strategy: function (options) {
        if (options.error && options.error.code === 'ECONNREFUSED') {
            console.log("Redis refused the connection: "+options.attempt+":"+options.total_retry_time);
            //console.log(options.error);
        }
        
        //reconnect after
        return Math.min(options.attempt * 100, 3000);
    }});

redisClient.auth(config['redisPass'], function (err) {
    if (err) {
      console.log("AUTH ERROR =================");
      console.log(err);
    }
});

redisClient.on("error", function (err) {
    if (err) {
        console.log("ERROR =================");
        console.log(err);
    }
});

redisClient.on('connect', function() {
    console.log('Connected to Redis');
});


db.redis = redisClient;
*/
