'use strict';
module.exports = (sequelize, DataTypes) => {
  var Expeditions = sequelize.define('expeditions', {
    idExp: {
    	type: Sequelize.INTEGER,
    	primaryKey: true
    }
    date: DataTypes.DATE,
    duree: DataTypes.INTEGER,
    type: DataTypes.STRING,
    butExp: DataTypes.STRING,
    idMat: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: materiel,
    		key: 'idMat',
    	}
    }
  });
  return Users;
};
