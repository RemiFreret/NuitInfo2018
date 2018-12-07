var models  = require('../models');
var express = require('express');
var router = express.Router();
var body_parser = require('body-parser');
var jpg = require('jpg');

router.use(body_parser.json()); // lol c'est déjà fait dans le app.js // On s'en fout ils sont pas dignes de confiance // Pas faux
router.use(body_parser.urlencoded({extended:true}));

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
function index (req, res) {
    models.teleassistance.findAll().then(
        function(result) {
            res.render("teleassistance", {res: result});
        }
    )
};

// define the ded page route
// On envoie en POST la variable 'ded'.
// 'ded' = 0                        il est pas mort 
// 'ded' = 1                        il est un peu mort
// 'ded' = BdvSZBQMJEFSCWLMJKSD     il est peut-être un peu mort


// ICI C'EST UN EASTER EGG
// Parceque c'est marrant
function is_U_Ded (req, res) {
    var img1, img2, alt1, alt2;
    var param = req.body.ded;

    img1 = "img/isuded.jpg";
    alt1 = "IS U DED?";

    if(param == 0){
        img2 = "img/isnoded.jpg";
        alt2 = "IS NO DED";
    }else if (param == 1){
        img2 = "img/isded.jpg";
        alt2 = "IS DED";
    }else{
        img2 = "img/ismaybeded.jpg";
        alt2 = "IS MAYBE DED?";
    }
    res.render('teleassistance1', {
        img1: img1,
        alt1: alt1,
        img2: img2,
        alt2: alt2
      });

};

router.get('/', index);
router.post('/is_U_Ded', is_U_Ded);
router.post('/Oxygene', require('./Oxygene.js'));
router.post('/Hydro', require('./Hydro.js'));
router.post('/Cardio', require('./Cardio.js'));
router.post('/Acceleration', require('./Acceleration.js'));
router.post('/Temperature', require('./Temperature.js'));

module.exports = router; // DO NOT REMOVE IT WORKS
