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
    }
  });

  return Item.sync({force: true}); // todo: only force in dev mode?
};


