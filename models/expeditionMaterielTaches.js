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
  Taches.hasOne(Expeditions);
  return Expeditions;
}
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
  Expeditions.hasMany(Materiel);
  return Materiel;
 }
module.exports = (sequelize, DataTypes) => {
  var Taches = sequelize.define('taches2', {
    objectif: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    priorite: DataTypes.INTEGER,
    fait: DataTypes.BOOLEAN,
    duree: DataTypes.INTEGER
  });
  return Taches;
}
