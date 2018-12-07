var express = require('express');
var cockpit = require('./cockpit.js');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/',cockpit.cockpitMain)

// define the dashboard page route
router.get('/dashboard',cockpit.cockpitDashboard)

// define the weather page route
router.get('/weather', cockpit.cockpitWeather)

module.exports = router;
