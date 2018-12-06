var models  = require('../models');
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/dashboard', function (req, res) {
    res.render('cockpit-index')
})

router.get('/map', function (req, res) {
    res.render('cockpit-map')
})

module.exports = router;
