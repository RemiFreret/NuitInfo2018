var models  = require('../models');
var express = require('express');
var router = express.Router();
var body_parser = require('body-parser');
var jpg = require('jpg');

//constante pour l'écriture des logs
var FS = require("fs");
FS.writeFileSync("./teleassistance/logs/log_acceleration", "UTF-8");
var WRITING = FS.createWriteStream("./teleassistance/logs/log_acceleration");

/**
 * écrit une ligne dans le fichier log
 * @param {*} data données à écrire 
 */
function writting_logs(data) {
    heure = new Date;
    if (heure.getMinutes() < 10) {
        heure = ("["+heure.getDate()+"-"+heure.getMonth()+"-"+heure.getFullYear()+" "+heure.getHours()+":0"+heure.getMinutes()+":"+heure.getSeconds()+"]");
    } else {
        heure = ("["+heure.getDate()+"-"+heure.getMonth()+"-"+heure.getFullYear()+" "+heure.getHours()+":"+heure.getMinutes()+":"+heure.getSeconds()+"]");
    }
    WRITING.cork();
    WRITING.write(heure+" La valeur de son accéléromètre est de "+data+"\n");
    WRITING.uncork();
}

router.use(body_parser.json()); // lol c'est déjà fait dans le app.js // On s'en fout ils sont pas dignes de confiance // Pas faux
router.use(body_parser.urlencoded({extended:true}));


// define the acc page route
// On envoie en POST la variable 'acc'.
// 'acc' = > 100 || < -100          il est pas mort 
// 'acc' = > 50 || < -50            il est un peu mort
// 'acc' = BdvSZBQMJEFSCWLMJKSD     il est peut-être un peu mort
function Acceleration (req, res) {
    var img1, img2, alt1, alt2;
    var param = req.body.acc;

    // ICI, ON STOCKE LE PARAMETRE DANS LA BDD
    // ET C'EST UN UPDATE PAS UN CREATE
    // PARCEQUE SINON
    // C'EST MOCHE
    // ET ON AURA JAMAIS LES THUNES

    img1 = "img/isuded.jpg";
    alt1 = "IS U DED?";

    if(param > 100 || param < -100){
        img2 = "img/isnoded.jpg";
        alt2 = "IS NO DED";
    }else if (param > 50 || param < -50){
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
      writting_logs(param);
};

module.exports = Acceleration; // DO NOT REMOVE IT WORKS
