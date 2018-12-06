'use strict';
module.exports = (sequelize, DataTypes) => {
  var Base = sequelize.define('base', {
    stock: DataTypes.STRING,
    etat: DataTypes.STRING
  });
  console.log("TEST");
  return Base;
};
