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
		fastag: {
			type: Sequelize.JSONB,
			defaultValue: {} // "{"9095741111":{"cid":"100010","aid":70106,"crn":"XXXXX9949","mAcc":"03889095741188","cName":"R Varadharaju","email":"vaXXXXXXXXXXXXX@gmail.com","address":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}}"
		},
		fastagBalance: {
			type: Sequelize.JSONB,
			defaultValue: {} //"{"9095741111":{"mBal":"15000","wBal":7288.38,"sdBal":1550,"tags":8,"vehicles":"8"}}"
		},
		config: {
			type: Sequelize.JSONB,
			defaultValue: {} // {general:{}, tripConfig:{}, driverConfig:{}, serviceConfig:{}, tyreConfig:{}, invConfig:{}}
		},
		driverConfig: {
			type: Sequelize.JSONB, // { minRest: value, maxWork:value, allowWeights: true/false, empNoMust: true/false }
			defaultValue: {}
		},
		tripConfig: {
			type: Sequelize.JSONB, // {autoAdvance: true/false, manualTrip: true/false, autoGenEmployeeNo: true/false}
			defaultValue: {
				simpleSettlement: true
			}
		},
		serviceConfig: {
			type: Sequelize.JSONB, // {autoJobCard: true/false, manualJobCard: true/false, autoGenJobCardNo: true/false}
			defaultValue: {}
		},
		driverMsg: {
			type: Sequelize.JSON, // {msg: "content"}
			define: {}
		},
		lastPoNo: Sequelize.STRING,
		lastGrnNo: Sequelize.STRING,
		lastTripSheetNo: Sequelize.STRING,
		lastDriverTripSheetNo: Sequelize.INTEGER,
		lastTripRefNo: Sequelize.STRING,
		lastJobCardNo: Sequelize.STRING,
		lastLrNo: Sequelize.STRING,
		loadBoard: Sequelize.INTEGER,
		paymentStatus: Sequelize.INTEGER, //0-Good, 1-Average, 2-Bad
		details: {
			type: Sequelize.JSONB,
			defaultValue: {} //psiConfig: {}//Apollo fleet psi config
		}
	}, {
		classMethods: {
			associate: function (models) {
				Account.hasMany(models.UserRole);
				Account.hasMany(models.User);
				Account.hasMany(models.Driver);
				Account.hasMany(models.Asset);
				Account.hasMany(models.Group);
				Account.hasMany(models.Tyre);
				Account.hasMany(models.TyreHistory);
				Account.hasMany(models.Lead);
				Account.hasMany(models.Waypoint);
				Account.hasMany(models.Route);
				Account.hasMany(models.FuelStock);
				Account.hasMany(models.DriverGroup);
				Account.hasMany(models.PoHeader);
				Account.hasMany(models.TripPlan);
				Account.hasMany(models.DriverLog);
				Account.hasMany(models.PayULog);
				Account.hasMany(models.DriverAttendance);
				Account.hasMany(models.DriverTripSheet);
				Account.hasMany(models.Customer);
				Account.belongsTo(Account, { as: 'AccountParent', foreignKey: 'AccountIdParent' });
				Account.hasMany(models.KtmAlignment);
				Account.hasMany(models.VehicleExpense);
				Account.hasMany(models.TripDetail);
				Account.hasMany(models.RdpHirePO);
				Account.hasMany(models.RdpMaterialPO);
				Account.hasMany(models.RouteAdvance);
				Account.hasMany(models.DriverAssignment);
				Account.hasMany(models.YardSheet);
				Account.hasMany(models.AplOffer);
				Account.hasMany(models.AplServiceLog);
				Account.hasMany(models.VehicleServiceType);
			}
		}
	});

	return Account;
};
console.log('Table will be created successfully - Account');