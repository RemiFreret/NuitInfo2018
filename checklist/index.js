var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
    res.send('GET request to the homepage');
})

module.exports = router;
