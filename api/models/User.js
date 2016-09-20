'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize) => {
  
  var User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name'
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name'
    }
  });

  return User.sync({force: true});
};


