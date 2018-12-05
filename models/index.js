'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/config.js')[env];
var db        = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

var sequelize = new Sequelize('nuitinfo', 'nuitinfo', 'nuitinfo', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
      console.log(file);
    // var model = sequelize['import'](path.join(__dirname, file));
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

sequelize.sync()


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
