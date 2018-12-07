var models  = require('../models');
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route


router.get('/formulaire', function (req, res) {
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
router.post('/formulaire', function(req, res){
  model.expeditions.create({
    idExp:req.body['text1'],
    date:req.body['text3'],
    duree: req.body['text2'],
    type:req.body['Type'],
    butexp:req.body['but']
  }).then(function(){
    models.expeditions.findAll().then(function(results){
      res.render('module002',{
        title:'TEST', 
        expeditions: results
      });
    });
  })

})
module.exports = router;
