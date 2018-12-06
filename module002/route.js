var models  = require('../models');
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function (req, res) {
    models.base.create({
        stock: "pano solaire",
        etat: "abime"
    }).then(function() {
        models.base.findAll().then(function(results) {
            res.render('module002', {
              title: 'TEST',
              base: results
            });
        });
    })
})

module.exports = router;
