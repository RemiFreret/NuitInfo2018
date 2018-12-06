'use strict';
module.exports = (sequelize, DataTypes) => {
  var Materiel = sequelize.define('materiel', {
    infos: DataTypes.STRING,
  });
  console.log("TEST");
  return Materiel;
};
