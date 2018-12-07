var models  = require('../models');
var express = require('express');
var router = express.Router();
var body_parser = require('body-parser');
var jpg = require('jpg');

router.use(body_parser.json()); // lol c'est déjà fait dans le app.js // On s'en fout ils sont pas dignes de confiance // Pas faux
router.use(body_parser.urlencoded({extended:true}));


// define the ded page route
// On envoie en POST la variable 'ded'.
// 'ded' = 0                        il est pas mort 
// 'ded' = 1                        il est un peu mort
// 'ded' = BdvSZBQMJEFSCWLMJKSD     il est peut-être un peu mort
function Oxygene (req, res) {
    var img1, img2, alt1, alt2;
    var param = req.body.ded;
    models.teleassistance.update({cardio: 5}, { where: {id: 1 }});

    // ICI, ON STOCKE LE PARAMETRE DANS LA BDD
    // ET C'EST UN UPDATE PAS UN CREATE
    // PARCEQUE SINON
    // C'EST MOCHE
    // ET ON AURA JAMAIS LES THUNES

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
        img1: img1, // img1
        alt1: alt1, // alt1
        img2: img2, // img2
        alt2: alt2  // alt2
      });

};

module.exports = Oxygene; // DO NOT REMOVE IT WORKS
