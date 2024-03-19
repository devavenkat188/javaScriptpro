"use strict";

var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
	var Account = sequelize.define("Account", {
		name: { type: Sequelize.STRING, unique: true },
		type: Sequelize.INTEGER, // 1-Client, 2-School, 3-Mark Dealer, 4-Dealer, 5-ICL, 6-Load, 7-Vehicop, 8-DLV Master, 9-DLV Vendor, 10-Apollo Fleet Master, 11-Apollo Fleet Customers
		status: Sequelize.INTEGER, // 0-Inactive, 1-Active, 2-Suspended, 3-Closed, 4-Write Off
		tname: Sequelize.STRING,
		oname: Sequelize.STRING,
		phone1: Sequelize.STRING,
		email1: Sequelize.STRING,
		phone2: Sequelize.STRING,
		email2: Sequelize.STRING,
		phone3: Sequelize.STRING,
		phone4: Sequelize.STRING,
		route: Sequelize.STRING,
		note: Sequelize.STRING,
		anote: Sequelize.TEXT,
		csnote: Sequelize.TEXT,
		totalvehicle: Sequelize.STRING,
		city: Sequelize.STRING,
		baddress: Sequelize.STRING,
		saddress: Sequelize.STRING,
		gst: Sequelize.STRING,
		devicebalance: Sequelize.STRING,
		rechargebalance: Sequelize.STRING,
		tag: Sequelize.STRING,
		
	}, {
		classMethods: {
			associate: function (models) {
				
				Account.hasMany(models.Asset);

			}
		}
	});

	return Account;
};
console.log('Table will be created successfully - Account');
