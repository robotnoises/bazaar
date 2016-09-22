'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize) => {
  
  var Role = sequelize.define('role', {
    type: { 
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
    .then(() => Role.create({ type: 'user' }))
    .then(() => Role.create({ type: 'admin' }))
    .then(() => Role.create({ type: 'superadmin' }))
    .catch((error) => {
      console.error(error);
    });
};


