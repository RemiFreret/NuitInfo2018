'use strict';
module.exports = (sequelize, DataTypes) => {
  var Taches = sequelize.define('taches', {
    objectif: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    priorite: DataTypes.INTEGER,
    fait: DataTypes.BOOLEAN,
    duree: DataTypes.INTEGER,
    idExp: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: expedition,
    		key: 'idExp',
    	}
    }
  });
  return Users;
};