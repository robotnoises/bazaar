var Sequelize = require('sequelize');
var express = require('express');
// var config = require('./config');

var app = express();

app.listen(process.env.PORT || 8888, () => {
  console.log('Server started.');
});

// ORM

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

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  }
});

User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

