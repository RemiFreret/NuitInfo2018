'use strict';
module.exports = (sequelize, DataTypes) => {
  var Base = sequelize.define('base', {
    stock: DataTypes.STRING,
    etat: DataTypes.INTEGER
  });
  console.log("TEST");
  return Base;
};
