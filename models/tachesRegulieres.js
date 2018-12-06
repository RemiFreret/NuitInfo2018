'use strict';
module.exports = (sequelize, DataTypes) => {
  var TachesRegulieres = sequelize.define('TachesRegulieres', {
    objectif: DataTypes.STRING,
    data: DataTypes.DATE,
    rythme: DataTypes.NUMBER,
    priorite: DataTypes.NUMBER
  });
  console.log("TEST");
  return TachesRegulieres;
};
