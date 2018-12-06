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
    models.users.create({
        username: "TATA"
    }).then(function() {
        models.users.findAll().then(function(results) {
            res.render('module002', {
              title: 'TEST',
              users: results
            });
        });
    })
})

module.exports = router;
