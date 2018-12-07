const express   = require('express');
const app       = express();
var fs          = require('fs');
var path        = require('path');

const APP_PORT = 3000;

var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

<<<<<<< HEAD
// Dashboard
var dashboard = require('./dashboard/route.js');
app.use('/dashboard', dashboard);
=======
// Module 002
var cockpit = require('./cockpit/route.js');
app.use('/cockpit', cockpit);
>>>>>>> grp-cockpit

// Start application
app.listen(APP_PORT, function () {
  console.log('Example app listening on port 3000 !')
})
