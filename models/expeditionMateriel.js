'use strict';
module.exports = (sequelize, DataTypes) => {
  var Expeditions = sequelize.define('expeditions2', {
    idExp: {
    	type: DataTypes.INTEGER,
    	primaryKey: true
    },
    date: DataTypes.DATEONLY,
    duree: DataTypes.INTEGER,
    type: DataTypes.STRING,
    butExp: DataTypes.STRING,

  });
  var Materiel = sequelize.define('materiel2', {
    infos: DataTypes.STRING
  });
  Expeditions.hasOne(Materiel);
  return Expeditions , Materiel;
};
