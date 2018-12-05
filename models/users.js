'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('users', {
    username: DataTypes.STRING
  });
  console.log("TEST");
  return Users;
};
