'use strict';
module.exports = (sequelize, DataTypes) => {
  var Expeditions = sequelize.define('expeditions', {
    idExp: {
     	type: DataTypes.STRING,
     	primaryKey: true
    },
    date: DataTypes.DATEONLY,
    duree: DataTypes.INTEGER,
    type: DataTypes.STRING,
    butExp: DataTypes.STRING,

  });
  // var mat  = require('../models/materiel.js');
  //
  // console.log('poussin');
  // console.log(mat.Materiel);
  //Expeditions.hasOne(mat);
  return Expeditions;
};
