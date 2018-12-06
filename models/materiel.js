'use strict';
module.exports = (sequelize, DataTypes) => {
  var Materiel = sequelize.define('materiel', {

  	// idMat: {
    // 	type: DataTypes.INTEGER,
    // 	references: 'expeditions',
    //   references: 'id'
    // },

    infos: DataTypes.STRING
  });
  //console.log("TEST");
  return Materiel;
};
