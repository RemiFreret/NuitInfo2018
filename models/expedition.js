'use strict';
module.exports = (sequelize, DataTypes) => {
  var Expeditions = sequelize.define('expeditions', {
    idExp: {
    	type: DataTypes.INTEGER,
    	primaryKey: true
    },
    date: DataTypes.DATEONLY,
    duree: DataTypes.INTEGER,
    type: DataTypes.STRING,
    butExp: DataTypes.STRING,
    /*
    idMat: {
    	type: DataTypes.INTEGER,
    	references: {
    		model: materiel,
    		key: 'idMat',
    	}
    }
    */
  });
  return Expeditions;
};
