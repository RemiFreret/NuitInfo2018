'use strict';
module.exports = (sequelize, DataTypes) => {
  var Alert = sequelize.define('alert', {
    name: DataTypes.STRING,
    privilege: DataTypes.INTEGER,
    description: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
  });
  return Alert;
};
