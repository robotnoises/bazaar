var Sequelize = require('sequelize');
var express = require('express');
var models = require('./api/models');

// var config = require('./config');

var app = express();
var port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log('Server started. Listening on port:', port);
});

// Sequelize

var sequelize = new Sequelize(
  process.env.BAZAAR_DB_NAME, 
  process.env.BAZAAR_DB_USER, 
  process.env.BAZAAR_DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});

models.init(sequelize)
  .then(() => {
    console.log('db synced')
  })
  .catch((error) => {
    console.error('db sync error:', error);
  });
