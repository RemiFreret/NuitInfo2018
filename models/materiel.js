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

var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/ajoute_outil', function (req, res) {
    models.materiel.create({
        info: "TATATO"
    }).then(function() {
        models.materiel.findAll().then(function(results) {
            res.render('module002', {
              title: 'TEST',
                materiel: results
            });
        });
    })
})