const express = require('express');
const bodyparser = require('body-parser'); // client to node js application.
const app = express();
const port = 8000;
const Sequelize = require('sequelize');
const sequel = new Sequelize('workplace','postgres','Deva@1234',{
    host:'localhost',
    dialect:'postgres',
});
const db = {}; // create a variable with empty object
 // add the properties to that object.
 db.Sequelize = Sequelize;
 db.sequel = sequel;

 app.listen(port,()=> {
    console.log(`The Server runs in the port number http://localhost:${port}`);
 });
 db.sequel.define('employee',{ // sequel is model. // define('employee') --> table name
    empid:{
        type:Sequelize.INTEGER,
        primaryKey: true,
    },
    empname:{
        type:Sequelize.STRING,
    },
    dept:{
        type:Sequelize.STRING,
    },
 })
 // sql with sync method --> is used to check whether the table is already present / not. if it is available, it will
 // shows available or it will create a new table.
 db.sequel.sync().then(function(){ // sync --> is a promise based so we use then function.
    console.log('sync');
 })