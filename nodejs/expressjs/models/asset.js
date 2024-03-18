'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
	var AssetsGroups = sequelize.define('AssetsGroups', {
		id: {
			type: Sequelize.BIGINT,
			primaryKey: true,
			autoIncrement: true
		}
	});

	var Asset = sequelize.define(
		'Asset',
		{
			name: Sequelize.STRING,
			lplate: { //licence plate no
				type: Sequelize.STRING, 
				unique: true
			},
			imei: {
				type: Sequelize.BIGINT
			},
			sim: {
				type: Sequelize.NUMERIC(20)
			},
			dtype: {
				// device model
				type: Sequelize.ENUM,
				allowNull: false,
				values: ['ET200', 'GT06N', 'TR02', 'FM1120']
			},
			alarm: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			remove: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			missing: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			odo: {
				type: Sequelize.BIGINT,
				defaultValue: 0
			},
			engineHrs: { // total engine hrs (in minutes)
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			engineHrsT: { // daily temp engine hrs (today, in minutes)
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			engine2Hrs: { // total engine 2 hrs (in minutes)
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			engine2HrsT: { // daily temp engine 2 hrs (today, in minutes)
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			fuel: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			fuel2: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			fuel3: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			fuelCTable: {
				type: Sequelize.JSONB,
				defaultValue: {}
			},
			sensor: {
				// 0=none,1=fuel
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			avgKM: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			avgHrs: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			type: {
				// asset type
				type: Sequelize.INTEGER,
				defaultValue: 1
			},
			newGPS: {
				//  newGPS
				type: Sequelize.INTEGER,
				defaultValue: 1
			},
			simOnly: {
				// simOnly
				type: Sequelize.INTEGER,
				defaultValue: 1
			},
			serverOnly: {
				// serverOnly
				type: Sequelize.INTEGER,
				defaultValue: 1
			},
			reChargeDate: Sequelize.DATEONLY,
			vType: Sequelize.STRING,
			lastDeviceAttribute: {
				type: Sequelize.JSONB,
				defaultValue: {}
			},
			share: {
				type: Sequelize.JSONB,
				defaultValue: {}
			},
			ptype: {
				// Problem type
				type: Sequelize.INTEGER,
				defaultValue: 1
			},
			fTankCapacity: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			fTankCapacity2: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			unladenweight: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			oldgrossweight: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			grossweight: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			group: Sequelize.STRING,
			tags: Sequelize.STRING,
			pLocation: Sequelize.STRING,
			sCapacity: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			chassisNo: Sequelize.STRING,
			engineNo: Sequelize.STRING,
			vehicleModel: Sequelize.STRING,
			mfgMonth: Sequelize.INTEGER,
			mfgYear: Sequelize.INTEGER,
			ownerName: Sequelize.STRING,
			address: Sequelize.STRING,
			caddress: Sequelize.TEXT,
			cloc: {
				type: Sequelize.JSONB,
				defaultValue: {}
			},
			note: Sequelize.STRING,
			pnote: Sequelize.STRING, //Private note
			maxspeed: {
				type: Sequelize.INTEGER,
				defaultValue: 55
			},
			avgSpeed: {
				type: Sequelize.INTEGER,
				defaultValue: 35
			},
			idle: {
				type: Sequelize.INTEGER,
				defaultValue: 15
			},
			alarmSettings: {
				type: Sequelize.JSONB,
				defaultValue: {}
			},
			maxspeedN: {
				type: Sequelize.INTEGER,
				defaultValue: 65
			},
			idleN: {
				type: Sequelize.INTEGER,
				defaultValue: 30
			},
			onoff2N: Sequelize.STRING,
			av: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			tripid: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			tripStatus: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			availability: {
				type: Sequelize.JSONB, //{createdAt,status,eta,gpsStatusOverride,lastGpsStatusOverride,note}
				defaultValue: {}
			},
			camera: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			cameraids: {
				type: Sequelize.JSONB,
				defaultValue: {}
			},
			serviceloc: Sequelize.STRING,
			axleProfile: Sequelize.STRING,
			axleConfig: {
				type: Sequelize.JSONB,
				defaultValue: {}
			},
			serviceBasedOn: {
					type: Sequelize.ENUM,
					values: ['ODO', 'EHR'], //values: ['Odometer', 'Engine Hrs']
					defaultValue: 'ODO'
			},
			restriction: {
				type: Sequelize.JSONB,
				defaultValue: {} // { "currentLevel": "level" , "level": {  "startDate": "", "endDate": "", "createdBy": "", "updatedBy": ""  }  }
			},
			cards: {
				type: Sequelize.JSONB, // { "fuel": [{ "fuel1": "XXXXXXXXXX", "fuel2": "XXXXXXXXXX", "fuel3": "XXXXXXXXXX", "fuel4": "XXXXXXXXXX" }], "atm":[{ "happay": "XXXXXXXXXXX" }],"fastag": "XXXXXXXXXXX" }
				defaultValue: {}
			},
			tripBalance : Sequelize.DECIMAL(12, 2),
			sensors: {
				type: Sequelize.ARRAY(Sequelize.TEXT)
				// ['fs1', 'fs2', 'afs1', 'ts1', 'ts2', 'ts3', 'ts4', 'ds', 'acs', 'eng2', 'rpm', 'lc', 'tpms', 'fm', 'ems', 'egs', 'egsv2', 'thl', 'lck1', 'lck2']
			},
			reportConfig: {
				type: Sequelize.JSONB, 
				defaultValue: {},
				/* 
					{ 
						"operationalTime": { "start": "06:00", "stop": "22:00" }, 
						"nightDrivingTime": { "start": "22:00", "stop": "06:00" }, 
						"ovsMaxDuration" : 180, 
						"minSpeed": 10, 
						"fatigueDriving": 240, 
						"osDetail": true, 
						"ndDetail": true, 
						"ovsDetail": true,
						"spDetail": true,
						"hbDetail": true,
						"kmAdjustPercent": 5 (percent boost)
					}
				*/
			},
			sensorConfig: {
				type: Sequelize.JSONB,
				defaultValue: {}
			},
			assetCode: Sequelize.STRING, // Client specific code 
			expMileage: Sequelize.FLOAT, // Expected Mileage
			expMileageUom: Sequelize.STRING, // KMPL or LPH
			lmTime: Sequelize.BIGINT, // Last Moved Time
			flags: { //priorityLoad - T/F
				type: Sequelize.JSONB, 
				defaultValue: {}
			},
			rtoLocation: Sequelize.STRING,
			hierarchyIds: {
				type: Sequelize.ARRAY(Sequelize.INTEGER), //[]
				defaultValue: []
			},
			secondaryAccounts: {
				type: Sequelize.JSONB, // { AccountId :{ AssetId: xxxxxx, imei: xxxxxx, exclude: [] } }
				defaultValue: {}
			},
			grease: { // e-greasing level
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			eLock: {
				type: Sequelize.INTEGER,
				defaultValue: 2 // 0-Undefined; 1-Locking; 2-Locked; 3-Unlocking; 4-Unlocked
			},
			removalDates: {
				type: Sequelize.JSON,
				defaultValue: {} // {"removed": ["2019-06-01", "2019-06-30"], "installed": ["2019-06-05", "2019-07-01"]}
			},
			images: {
				type: Sequelize.JSONB,
				defaultValue: {} //{rcImages: []}
			},
			details: {
				type: Sequelize.JSONB,
				defaultValue: {}
				/*
					axleProfile: {
						"wheeler": "6W",
						"config": "4x2",
						"name": "Steer,Drive"
					},
					costPerHr: 10,
					tankerNumber: "123",
					fuelCatalyst: "Yes",
					catalystInstallDate: "2023-02-27"
				*/
			},
			billingType: Sequelize.STRING,
			ownership: {
				type: Sequelize.ENUM,
				values: ['Owned', 'Attached', 'Hired', 'Hired-GPS']
			},
			weight: {
				type: Sequelize.JSONB,
				defaultValue: {}
				/*
					vehicleTare: 10
				*/
			},
			capacity: {
				type: Sequelize.JSONB,
				defaultValue: {}
				/*
					weight: 10,
					volume: 10
				*/
			},
			dimension: {
				type: Sequelize.JSONB,
				defaultValue: {}
				/*
					bumperToBumper: 10,
					axleToAxle: 10,
					height: 10
				*/
			},
			plan: {
				type: Sequelize.INTEGER //Apollo Fleet -> 1-AMCS, 2-AMCC, 3-DE, 4-TXE
			}
		},
		{
			classMethods: {
				associate: function(models) {
					Asset.belongsTo(models.Account);
					Asset.belongsTo(models.AccountsGroup);
					Asset.hasMany(models.AssetLog);
					Asset.hasMany(models.FuelLog);
					Asset.hasMany(models.FuelEventLog);
					Asset.hasMany(models.ServiceLog);
					Asset.hasMany(models.Driver);
					Asset.hasMany(models.Document);
					Asset.hasMany(models.DocumentLog);
					Asset.hasMany(models.VehicleServiceSchedule);
					Asset.belongsTo(models.VehicleModel);
					Asset.belongsTo(models.VehicleType);
					Asset.hasMany(models.Tyre);
					Asset.hasMany(models.TyreHistory);
					Asset.hasMany(models.Trip);
					Asset.hasMany(models.TripAdvance);
					Asset.hasMany(models.TripSheet);
					Asset.hasMany(models.TollExpense);
					Asset.hasMany(models.TripClosureRequest);
					Asset.hasMany(models.FuelRequest);
					Asset.belongsToMany(models.Group, {
						through: AssetsGroups
					});
					Asset.hasMany(models.Report);
					Asset.hasMany(models.Report2);
					Asset.hasMany(models.ManualReport);
					Asset.belongsTo(models.DriverGroup);
					Asset.hasMany(models.AssetsDriverGroup);
					Asset.hasMany(models.LoadSequence);
					Asset.hasMany(models.TripPlan);
					Asset.hasMany(models.DriverLog);
					Asset.hasMany(models.SensorLog);
					Asset.hasMany(models.GeoPoint);
					Asset.hasMany(models.GeoPointGroup);
					Asset.hasOne(models.DeviceConfig);
					Asset.hasMany(models.DriverTripSheet);
					Asset.hasMany(models.AssetService);
					Asset.hasMany(models.KtmAlignment);
					Asset.hasMany(models.Inspection);
					Asset.hasMany(models.GroupLog);
					Asset.hasMany(models.VehicleExpense);
					Asset.hasMany(models.LorryReceipt);
					Asset.hasMany(models.AplJobCard);
					Asset.hasMany(models.ServiceBooking);
					Asset.hasMany(models.Crmlog);
					Asset.hasMany(models.DriverAssignment);
					Asset.hasMany(models.YardSheet);
				}
			}
		}
	);

	return Asset;
};
console.log('Asset - Table created successfully');