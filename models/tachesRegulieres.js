'use strict';
module.exports = (sequelize, DataTypes) => {
  var TachesRegulieres = sequelize.define('TachesRegulieres', {
    objectif: DataTypes.STRING,
    data: DataTypes.DATE,
    rythme: DataTypes.INTEGER,
    priorite: DataTypes.INTEGER
  });
  return TachesRegulieres;
};
