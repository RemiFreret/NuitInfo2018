'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tele = sequelize.define('teleassistance', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    oxygene : DataTypes.FLOAT,
    cardio : DataTypes.FLOAT,
    temperature : DataTypes.FLOAT,
    acceleration : DataTypes.FLOAT,
    hydro : DataTypes.FLOAT
  });

  return Tele;
};
