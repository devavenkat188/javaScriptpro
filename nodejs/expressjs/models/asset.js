'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {

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
		},
		{
			classMethods: {
				associate: function (models) {
					Asset.belongsTo(models.Account);
				}
			}
		}
	);

	return Asset;
};
console.log('Asset - Table created successfully');
