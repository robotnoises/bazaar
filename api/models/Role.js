'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize) => {
  
  var Role = sequelize.define('role', {
    type: { 
      type: Sequelize.STRING
    }
  });

  return Role.sync({force: true})
    .then(() => {
      return Role.create({
        type: 'user'
      });
    })
    .then(() => {
      return Role.create({
        type: 'admin'
      })
    })
    .then(() => {
      return Role.create({
        type: 'superadmin'
      })
    })
    .catch((error) => {
      console.error(error);
    });
};


