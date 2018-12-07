'use strict';
module.exports = (sequelize, DataTypes) => {
  var User1 = sequelize.define('user1', {
    username: DataTypes.STRING,
  });
  return User1;
};
module.exports = (sequelize, DataTypes) => {
  var User1 = sequelize.define('user1', {
    username: DataTypes.STRING,
  });
  var User2 = sequelize.define('user2', {
    username: DataTypes.STRING,
  });
  return User2;
  User1.hasOne(User2);
};
