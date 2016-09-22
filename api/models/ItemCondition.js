'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize) => {
  
  var ItemCondition = sequelize.define('item_condition', {
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

  return ItemCondition.sync({force: true})
    .then(() => ItemCondition.create({ value: 'new' }))
    .then(() => ItemCondition.create({ value: 'newish' }))
    .then(() => ItemCondition.create({ value: 'used' }))
    .then(() => ItemCondition.create({ value: 'fair' }))
    .then(() => ItemCondition.create({ value: 'broken' }))
    .catch((error) => {
      console.error(error);
    });
};


