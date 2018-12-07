var models  = require('../models');
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route


router.get('/tachecreate', function (req, res) {
    models.taches.create({
        objectif: "collecter pierre",
        date: Date.now(),
        priorite : 1,
        fait: false,
        duree : 15
    }).then(function() {
        models.taches.findAll().then(function(results) {
            res.render('module002', {
              title: 'TEST',
                taches: results
            });
        });
    })
})
router.get('/g', function (req, res) {
  console.log(models.expeditions2);
    models.materiel.create({
      infos: "des infos"
    })
    models.taches.create({
     objectif: "obj",
       //date: Date.UTC(2016, 0, 1),
     priorite: 2,
     fait: true,
     duree: 8
    })
})

/*
router.get('/testBDD', function (req, res) {
    models.taches.create({
        objectif: "Rester en vie",
        date: new Date(Date.UTC(2016, 0, 1)),
        priorite: 5,
        fait: true,
        duree: 24
        idExp: 1
    }).then(function() {
        models.taches.findAll().then(function(results) {
            res.render('module002', {
              title: 'TEST_BDD',
              taches: results
            });
        });
    })
})
*/
module.exports = router;
