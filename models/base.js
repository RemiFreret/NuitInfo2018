'use strict';
module.exports = (sequelize, DataTypes) => {
  var Base = sequelize.define('base', {
    stock: DataTypes.STRING,
    etat: DataTypes.NUMBER
  });
  console.log("TEST");
  return Base;
};
