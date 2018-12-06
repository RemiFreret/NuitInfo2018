var models  = require('../models');
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
function index (req, res) {
    models.users.create({
        username: "TOTO"
    }).then(function() {
        models.users.findAll().then(function(results) {
            res.render('module002', {
              title: 'TEST',
              users: results
            });
        });
    })
};

// define the home page route
function aiTuMors (req, res) {
    var toPrint;
    var param = req.params.lol;
    for (p in req.query){
        console.log(p);
    }
    if(param == 0){
        toPrint = "Lol nope"
    }else if (param == 1){
        toPrint = "Mdr yep"
    }else{
        toPrint = param
    }

    models.users.create({
                username: toPrint
    }).then(function() {
        models.users.findAll().then(function(results) {
            res.render('module002', {
              title: 'TEST',
              users: results
            });
        });
    })
};

router.get('/', index);
router.post('/aiTuMors', aiTuMors);

module.exports = router;
