"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || "development";
var db_json   = process.env.NODE_ENV_DB_JSON || 'db.json';
var config    = require(__dirname + '/../config/' + db_json)[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Redis db config 
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

module.exports = db;