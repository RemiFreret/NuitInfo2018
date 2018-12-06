'use strict';
module.exports = (sequelize, DataTypes) => {
  var Base = sequelize.define('users', {
    stock: DataTypes.STRING,
    etat: DataTypes.NUMBER
  });
  console.log("TEST");
  return Base;
};
