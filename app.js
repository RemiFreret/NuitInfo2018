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
// app.use(express.static(path.join(__dirname, 'public')));


// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

// Module route.js
var routejs = require('./teleassistance/route.js');
app.use('/teleassistance', routejs);

// Module 002
var module002 = require('./module002/route.js');
app.use('/module002', module002);

// Start application
app.listen(APP_PORT, function () {
  console.log('Example app listening on port 3000 !')
})
