'use strict';
module.exports = (sequelize, DataTypes) => {
  var Materiel = sequelize.define('materiel', {
  	/*
  	idMat: {
    	type: DataTypes.INTEGER,
    	primaryKey: true
    },
    */
    infos: DataTypes.STRING
  });
  //console.log("TEST");
  return Materiel;
};
