'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize) => {
  
  var Item = sequelize.define('item', {
    title: {
      type: Sequelize.STRING,
      field: 'title'
    },
    description: {
      type: Sequelize.TEXT,
      field: 'description'
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

  return Item.sync({force: true}); // todo: only force in dev mode?
};


