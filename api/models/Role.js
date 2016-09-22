'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize) => {
  
  var Role = sequelize.define('role', {
    value: { 
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    }
  });

  return Role.sync({force: true})
    .then(() => Role.create({ value: 'user' }))
    .then(() => Role.create({ value: 'admin' }))
    .then(() => Role.create({ value: 'superadmin' }))
    .catch((error) => {
      console.error(error);
    });
};


