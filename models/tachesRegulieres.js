'use strict';
module.exports = (sequelize, DataTypes) => {
  var TachesRegulieres = sequelize.define('TachesRegulieres', {
    stock: DataTypes.STRING,
  });
  console.log("TEST");
  return TachesRegulieres;
};
